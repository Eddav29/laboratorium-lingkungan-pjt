#!/usr/bin/env node

/**
 * SEO Testing Script
 * Run this after deploying to test all SEO optimizations
 */

import https from 'https';
import http from 'http';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

// Test URLs
const testUrls = [
  '/',
  '/services',
  '/about',
  '/contact',
  '/services/air',
  '/services/udara-ambient',
  '/services/mikrobiologi'
];

// SEO tests
const tests = {
  title: (html) => {
    const match = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    return match ? match[1].trim() : null;
  },
  
  metaDescription: (html) => {
    const match = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i);
    return match ? match[1] : null;
  },
  
  h1Count: (html) => {
    const matches = html.match(/<h1[^>]*>.*?<\/h1>/gi);
    return matches ? matches.length : 0;
  },
  
  structuredData: (html) => {
    const matches = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>.*?<\/script>/gi);
    return matches ? matches.length : 0;
  },
  
  openGraph: (html) => {
    const ogTags = html.match(/<meta[^>]*property=["']og:[^"']+["'][^>]*>/gi);
    return ogTags ? ogTags.length : 0;
  },
  
  canonical: (html) => {
    const match = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i);
    return match ? match[1] : null;
  }
};

async function testUrl(url) {
  return new Promise((resolve, reject) => {
    const fullUrl = `${BASE_URL}${url}`;
    const client = fullUrl.startsWith('https') ? https : http;
    
    client.get(fullUrl, (res) => {
      let html = '';
      
      res.on('data', (chunk) => {
        html += chunk;
      });
      
      res.on('end', () => {
        const results = {
          url,
          statusCode: res.statusCode,
          title: tests.title(html),
          metaDescription: tests.metaDescription(html),
          h1Count: tests.h1Count(html),
          structuredData: tests.structuredData(html),
          openGraph: tests.openGraph(html),
          canonical: tests.canonical(html)
        };
        
        resolve(results);
      });
    }).on('error', reject);
  });
}

async function runSEOTests() {
  console.log('🔍 Running SEO Tests...\n');
  
  const results = [];
  
  for (const url of testUrls) {
    try {
      console.log(`Testing: ${url}`);
      const result = await testUrl(url);
      results.push(result);
      
      // Basic validation
      const issues = [];
      if (!result.title) issues.push('Missing title');
      if (!result.metaDescription) issues.push('Missing meta description');
      if (result.h1Count !== 1) issues.push(`H1 count: ${result.h1Count} (should be 1)`);
      if (result.structuredData === 0) issues.push('No structured data');
      if (result.openGraph === 0) issues.push('No Open Graph tags');
      if (!result.canonical) issues.push('Missing canonical URL');
      
      if (issues.length === 0) {
        console.log('✅ All SEO checks passed');
      } else {
        console.log('⚠️ Issues found:', issues.join(', '));
      }
      
      console.log('');
    } catch (error) {
      console.error(`❌ Error testing ${url}:`, error.message);
    }
  }
  
  // Summary
  console.log('📊 SEO Test Summary:');
  console.log(`Total URLs tested: ${results.length}`);
  console.log(`Successful tests: ${results.filter(r => r.statusCode === 200).length}`);
  
  // Check sitemap and robots.txt
  await testSpecialFiles();
}

async function testSpecialFiles() {
  console.log('\n🤖 Testing Special Files:');
  
  // Test robots.txt
  try {
    await testUrl('/robots.txt');
    console.log('✅ robots.txt accessible');
  } catch {
    console.log('❌ robots.txt not accessible');
  }
  
  // Test sitemap.xml
  try {
    await testUrl('/sitemap.xml');
    console.log('✅ sitemap.xml accessible');
  } catch {
    console.log('❌ sitemap.xml not accessible');
  }
  
  // Test manifest.json
  try {
    await testUrl('/manifest.json');
    console.log('✅ manifest.json accessible');
  } catch {
    console.log('❌ manifest.json not accessible');
  }
}

// Run tests
if (import.meta.url === `file://${process.argv[1]}`) {
  runSEOTests().catch(console.error);
}

export { runSEOTests, testUrl };
