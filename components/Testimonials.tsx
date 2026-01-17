import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-primary font-sans font-bold text-sm tracking-widest uppercase mb-16">Musicians' Voices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Main Feature Testimonial */}
          <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDiqnK12N2O-0mXC_HGoDvTqBUH44mn-0o69LhsSjf7wts9gwyAbdAbjMM61p_yDfiGBlNs_MNE3Cx7yhifFQjx9EqSHo0nUV8tRfw1WKXLsksrrlUWSKu8SWGXP7Tk1V0VDKTCeLBPVLLCleNFkPh60eDvUGE2kEEpFb7TaaB3z4Na9c07QKK6JM0vKC06w-PG1tgDin1NYvc5BC7yyn6D6TjWNiDulTfAqroJEoxfgtJWs5IUQ7NQz3o3xvA0mWuNGvRoMbR-rp8')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <div className="flex gap-1 text-primary mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-lg">star</span>
                ))}
              </div>
              <p className="text-2xl font-bold italic font-display mb-4">"The depth of tone they unlocked in my Guarneri is simply indescribable. It feels like a completely new instrument."</p>
              <p className="font-sans font-bold text-sm tracking-wide">ELENA ROSTOVA</p>
              <p className="font-sans text-xs text-white/70">Principal Violin, Vienna Symphony</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* Quote 2 */}
            <div className="bg-white dark:bg-[#2a2218] p-8 rounded-xl border border-[#f3eee7] dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-text-main dark:text-white text-lg italic mb-4">"Luthier Studio understands that a restoration isn't just about fixing wood; it's about preserving history. Their attention to varnish detail is unmatched."</p>
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDegNeCJF_2m_8q6QPtJOK5NxFTnNxOywwh_OgiuiGmr--26Zp3FvaoVFwVk3XmMccxOLaY_2t3419Imnc6Y3OS1tCho9x1_3LKbPaIqRyB0xsrjlSy5qcxB1SdvOQZMCSvcdb54c257KhpNn4nkNfR_f3k7MtuojYscMi6AFKjJu7LJKSfT9xYQ_Mp5yEoSfmqM8si6YJFSp40ERZdzsJ17nON2Y1GokLXKyf-2vIkg_LF8SOcqRqOK9gn854jMNbEcqMkZ5gCXKk')" }}></div>
                <div>
                  <p className="font-sans font-bold text-sm text-text-main dark:text-white">JAMES CHEN</p>
                  <p className="font-sans text-xs text-text-muted">Concert Soloist</p>
                </div>
              </div>
            </div>

            {/* Quote 3 */}
            <div className="bg-white dark:bg-[#2a2218] p-8 rounded-xl border border-[#f3eee7] dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-text-main dark:text-white text-lg italic mb-4">"I trust no one else with my bow rehairing. The consistency and bite I get from their work allows me to play with full confidence."</p>
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiJkp8pe0KYDo-HNzU1naMw43XOp7f8VQI2ThAL3OGa3nPDHTjuu3twkJ0BSeZPxhnG7oQFx7ZwMn7iGLZV2H68HSGkmFz8OZvLNANTTNabNDUxvC9t5lvYiYlFUDQi2jlYUvk3-0VFatSzFLzQ6MKShf6Aikzk0wlNi2G_zXzg6XeDirXwgZDDkA_kKpnAjLqSN42FAPzlfET077UGhkLdmPH8lsfnmaGyFEwEzNUKEeleR72k-bGB4D72uQfpuI4nXuq3KPEyX0')" }}></div>
                <div>
                  <p className="font-sans font-bold text-sm text-text-main dark:text-white">SARAH MILLER</p>
                  <p className="font-sans text-xs text-text-muted">Professor, Royal Academy of Music</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;