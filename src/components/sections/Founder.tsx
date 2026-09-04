import coImg from "@/assets/co.jpg";

export function Founder() {
  return (
    <section className="relative bg-background py-24 text-foreground md:py-32 overflow-hidden">
      <div className="star-bg">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Our Leader</div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            Meet the Founder & Vision
          </h1>
          <p className="mt-4 text-base leading-relaxed text-foreground/80 md:text-lg">
            Discover the passion and dedication behind BLF Cashews
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div className="flex justify-center">
            <div className="card">
              <img src={coImg} alt="Ms Nixey - Founder & CEO of BLF Cashews" className="img" />
              <div className="textBox">
                <p className="text head">Ms Nixey</p>
                <span>Founder & CEO</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-3xl font-bold">Ms Nixey</h2>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
                Founder & CEO
              </p>
              <p className="text-foreground/80 leading-relaxed">
                With a passion for quality and authenticity, Ms Nixey founded BLF Cashews to bring
                premium Tanzanian cashews to the world. Commitment to excellence and sustainable
                sourcing has made BLF a trusted name in the premium cashew market.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="font-display text-xl font-bold">Our Vision</h3>
                <p className="text-foreground/70 leading-relaxed">
                  To provide the finest quality cashews while supporting sustainable farming
                  practices in Tanzania and creating lasting value for our community.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-display text-xl font-bold">Mission</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Deliver premium, naturally processed cashews with exceptional taste and quality,
                  while maintaining ethical business practices and environmental responsibility.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-display text-xl font-bold">Core Values</h3>
                <ul className="space-y-2">
                  <li className="text-foreground/80 flex items-start gap-3">
                    <span className="text-lg">🌿</span>
                    <span>
                      <strong>Sustainability</strong> — Caring for our planet and communities
                    </span>
                  </li>
                  <li className="text-foreground/80 flex items-start gap-3">
                    <span className="text-lg">✨</span>
                    <span>
                      <strong>Quality</strong> — Uncompromising standards in every product
                    </span>
                  </li>
                  <li className="text-foreground/80 flex items-start gap-3">
                    <span className="text-lg">💚</span>
                    <span>
                      <strong>Integrity</strong> — Honest, transparent business practices
                    </span>
                  </li>
                  <li className="text-foreground/80 flex items-start gap-3">
                    <span className="text-lg">🤝</span>
                    <span>
                      <strong>Community</strong> — Supporting local farmers and artisans
                    </span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gold/20 bg-card/70 p-6 shadow-lg shadow-gold/5 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold/30 to-primary/30 text-lg font-bold text-foreground ring-2 ring-gold/30">
                MJ
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">Mr Jofrey</h3>
                <p className="text-sm uppercase tracking-[0.2em] text-gold">Director</p>
              </div>
            </div>
            <p className="mt-4 text-foreground/75 leading-relaxed">
              Mr Jofrey supports the strategic direction of BLF Cashews with a strong focus on
              leadership, growth, and operational excellence across the business.
            </p>
          </div>

          <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-gold/5 p-6 shadow-lg shadow-primary/10">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-gold">Leadership</p>
            <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
              Our Vision in Action
            </h3>
            <p className="mt-4 text-foreground/75 leading-relaxed">
              Together, our leadership team blends premium quality, trust, and community impact to
              create a stronger future for Tanzanian cashews and the people behind them.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .card {
          width: 195px;
          height: 285px;
          background: #313131;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          transition: 0.2s ease-in-out;
          position: relative;
          overflow: hidden;
        }

        .card .img {
          height: 100%;
          position: absolute;
          transition: 0.2s ease-in-out;
          z-index: 1;
          object-fit: cover;
          width: 100%;
        }

        .card .textBox {
          opacity: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 15px;
          transition: 0.2s ease-in-out;
          z-index: 2;
        }

        .card .textBox .text {
          font-weight: bold;
        }

        .card .textBox .head {
          font-size: 20px;
        }

        .card .textBox span {
          font-size: 12px;
          color: lightgrey;
        }

        .card:hover .textBox {
          opacity: 1;
        }

        .card:hover .img {
          transform: scale(1.05);
          filter: blur(7px);
          animation: anim 3s infinite;
        }

        @keyframes anim {
          0% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-20px);
          }

          100% {
            transform: translateY(0);
          }
        }

        .card:hover {
          transform: scale(1.04) rotate(-1deg);
        }

        .Btn {
          width: auto;
          height: 45px;
          min-width: 45px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: none;
          background-color: transparent;
          position: relative;
          border-radius: 7px;
          cursor: pointer;
          transition: all 0.3s;
          padding: 0;
        }

        .svgContainer {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: transparent;
          backdrop-filter: blur(0px);
          letter-spacing: 0.8px;
          border-radius: 10px;
          transition: all 0.3s;
          border: 1px solid rgba(156, 156, 156, 0.466);
        }

        .Btn .BG {
          position: absolute;
          content: "";
          width: 100%;
          height: 100%;
          background: #ff0000;
          z-index: -1;
          border-radius: 10px;
          pointer-events: none;
          transition: all 0.3s;
        }

        .Btn:hover .BG {
          transform: rotate(35deg);
          transform-origin: bottom;
        }

        .Btn:hover .svgContainer {
          border: 1px solid rgba(255, 110, 110, 0.466);
          background-color: rgba(219, 219, 219, 0.466);
          backdrop-filter: blur(4px);
        }

        .Btn .btn-text {
          position: relative;
          z-index: 1;
          font-size: 14px;
          color: white;
          white-space: nowrap;
        }
      `}</style>
    </section>
  );
}
