~// SEO Audit utility functions
export function auditPageSEO() {
  // Check if running in browser environment
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    console.warn('SEO Audit can only run in browser environment');
    return null;
  }

  const results = {
    title: auditTitle(),
    metaDescription: auditMetaDescription(),
    headingStructure: auditHeadings(),
    images: auditImages(),
    internalLinks: auditInternalLinks(),
    structuredData: auditStructuredData(),
    performance: auditPerformance()
  }
  
  console.group('🔍 SEO Audit Results')
  Object.entries(results).forEach(([key, value]) => {
    console.log(`${key}:`, value)
  })
  console.groupEnd()
  
  return results
}

function auditTitle() {
  const title = document.title
  return {
    content: title,
    length: title.length,
    isOptimal: title.length >= 30 && title.length <= 60,
    recommendations: title.length < 30 ? 'Title too short' : title.length > 60 ? 'Title too long' : 'Good'
  }
}

function auditMetaDescription() {
  const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') || ''
  return {
    content: metaDesc,
    length: metaDesc.length,
    isOptimal: metaDesc.length >= 120 && metaDesc.length <= 160,
    recommendations: !metaDesc ? 'Missing meta description' : 
                    metaDesc.length < 120 ? 'Meta description too short' : 
                    metaDesc.length > 160 ? 'Meta description too long' : 'Good'
  }
}

function auditHeadings() {
  const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
  const h1Count = document.querySelectorAll('h1').length
  
  return {
    totalHeadings: headings.length,
    h1Count,
    structure: headings.map(h => ({ tag: h.tagName, text: h.textContent?.slice(0, 50) })),
    isOptimal: h1Count === 1,
    recommendations: h1Count === 0 ? 'Missing H1 tag' : 
                    h1Count > 1 ? 'Multiple H1 tags found' : 'Good'
  }
}

function auditImages() {
  const images = Array.from(document.querySelectorAll('img'))
  const imagesWithoutAlt = images.filter(img => !img.alt || img.alt.trim() === '')
  
  return {
    totalImages: images.length,
    imagesWithoutAlt: imagesWithoutAlt.length,
    isOptimal: imagesWithoutAlt.length === 0,
    recommendations: imagesWithoutAlt.length > 0 ? `${imagesWithoutAlt.length} images missing alt text` : 'Good'
  }
}

function auditInternalLinks() {
  const links = Array.from(document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"]'))
  const linksWithoutText = links.filter(link => !link.textContent?.trim())
  
  return {
    totalInternalLinks: links.length,
    linksWithoutText: linksWithoutText.length,
    isOptimal: linksWithoutText.length === 0 && links.length > 0,
    recommendations: linksWithoutText.length > 0 ? 'Some links missing descriptive text' : 
                    links.length === 0 ? 'No internal links found' : 'Good'
  }
}

function auditStructuredData() {
  const structuredDataScripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
  
  return {
    totalStructuredData: structuredDataScripts.length,
    types: structuredDataScripts.map(script => {
      try {
        const data = JSON.parse(script.textContent || '')
        return data['@type']
      } catch {
        return 'Invalid JSON'
      }
    }),
    isOptimal: structuredDataScripts.length > 0,
    recommendations: structuredDataScripts.length === 0 ? 'No structured data found' : 'Good'
  }
}

function auditPerformance() {
  // Basic performance metrics
  try {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    
    if (navigation) {
      return {
        domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
        loadComplete: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
        recommendations: 'Use Lighthouse for detailed performance analysis'
      }
    }
  } catch {
    // Fallback for browsers that don't support Navigation Timing API
  }
  
  return {
    domContentLoaded: 'N/A',
    loadComplete: 'N/A',
    recommendations: 'Navigation Timing API not supported. Use Lighthouse for detailed performance analysis'
  }
}

// Usage in browser console:
// auditPageSEO()

// Additional utility functions for SEO analysis
export function generateSEOReport() {
  const results = auditPageSEO();
  if (!results) return null;
  
  const issues = [];
  const recommendations = [];
  
  // Analyze results and generate actionable insights
  if (!results.title.isOptimal) {
    issues.push(`Title: ${results.title.recommendations}`);
    recommendations.push('Optimize page title to be between 30-60 characters');
  }
  
  if (!results.metaDescription.isOptimal) {
    issues.push(`Meta Description: ${results.metaDescription.recommendations}`);
    recommendations.push('Write a compelling meta description between 120-160 characters');
  }
  
  if (!results.headingStructure.isOptimal) {
    issues.push(`Headings: ${results.headingStructure.recommendations}`);
    recommendations.push('Ensure each page has exactly one H1 tag and proper heading hierarchy');
  }
  
  if (!results.images.isOptimal) {
    issues.push(`Images: ${results.images.recommendations}`);
    recommendations.push('Add descriptive alt text to all images for accessibility and SEO');
  }
  
  if (!results.structuredData.isOptimal) {
    issues.push(`Structured Data: ${results.structuredData.recommendations}`);
    recommendations.push('Add Schema.org structured data to help search engines understand your content');
  }
  
  console.group('📊 SEO Report Summary');
  console.log('Issues Found:', issues.length);
  console.log('Recommendations:', recommendations);
  console.groupEnd();
  
  return { issues, recommendations, results };
}

export default auditPageSEO
