export default function NewsSection() {
  const posts = [
    {
      title: 'Building Resilience Coping Strategies for Life\'s Challenges',
      image: 'https://html.awaikenthemes.com/hipno/images/post-1.jpg',
      link: '/blog/building-resilience'
    },
    {
      title: 'Exploring the Connection Between Mental and Physical Health',
      image: 'https://html.awaikenthemes.com/hipno/images/post-2.jpg',
      link: '/blog/mental-physical-health'
    },
    {
      title: 'Boosting Self-Esteem and Confidence Through Therapy',
      image: 'https://html.awaikenthemes.com/hipno/images/post-3.jpg',
      link: '/blog/self-esteem-confidence'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
              Latest Post/Blog
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-dark leading-tight">
              Guidance and Insights for Mental Wellness Journey
            </h2>
          </div>
          <a
            href="/blog"
            className="bg-primary text-white px-8 py-4 text-sm font-medium hover:bg-secondary transition-all duration-300 cursor-pointer whitespace-nowrap uppercase tracking-wide"
          >
            View All Post
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="group bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <a href={post.link} className="block">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </a>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-dark mb-4 leading-tight group-hover:text-primary transition-colors">
                  <a href={post.link} className="cursor-pointer">
                    {post.title}
                  </a>
                </h3>
                <a
                  href={post.link}
                  className="inline-flex items-center text-primary text-sm font-medium hover:text-secondary transition-colors cursor-pointer uppercase tracking-wide"
                >
                  Read More
                  <i className="ri-arrow-right-line ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
