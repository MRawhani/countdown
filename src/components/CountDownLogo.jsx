import React from 'react'

export default function CountDownLogo() {
    return (
        <div className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-jumbo flex justify-center p-3 lg:p-5">
        <div
          className="flex logo relative"
          style={{ transform: "translateY(3px)" }}
        >
          <div className="flex relative">
            <div
              className="letter-wrapper font-anton relative text-yellow"
              data-letter="C"
              style={{ perspective: "250px", lineHeight: 1 }}
            >
              <div
                className="letter letter-lead absolute inset-0 letter-flipped"
                data-letter="C"
                style={{ transform: "scale(1.01)" }}
              />
              <div className="opacity-0">C</div>
            </div>
            <div
              className="letter-wrapper font-anton relative text-yellow"
              data-letter="O"
              style={{ perspective: "250px", lineHeight: 1 }}
            >
              <div
                className="letter letter-lead absolute inset-0 letter-flipped"
                data-letter="O"
                style={{ transform: "scale(1.01)" }}
              />
              <div className="opacity-0">O</div>
            </div>
            <div
              className="letter-wrapper font-anton relative text-yellow"
              data-letter="U"
              style={{ perspective: "250px", lineHeight: 1 }}
            >
              <div
                className="letter letter-lead absolute inset-0 letter-flipped"
                data-letter="U"
                style={{ transform: "scale(1.01)" }}
              />
              <div className="opacity-0">U</div>
            </div>
            <div
              className="letter-wrapper font-anton relative text-yellow"
              data-letter="N"
              style={{ perspective: "250px", lineHeight: 1 }}
            >
              <div
                className="letter letter-lead absolute inset-0 letter-flipped"
                data-letter="N"
                style={{ transform: "scale(1.01)" }}
              />
              <div className="opacity-0">N</div>
            </div>
            <div
              className="letter-wrapper font-anton relative text-yellow"
              data-letter="T"
              style={{ perspective: "250px", lineHeight: 1 }}
            >
              <div
                className="letter letter-lead absolute inset-0 letter-flipped"
                data-letter="T"
                style={{ transform: "scale(1.01)" }}
              />
              <div className="opacity-0">T</div>
            </div>
            <div
              className="letter-wrapper font-anton relative text-white"
              data-letter="D"
              style={{ perspective: "250px", lineHeight: 1 }}
            >
              <div
                className="letter letter-follow absolute inset-0 letter-flipped"
                data-letter="D"
              />
              <div
                className="letter letter-lead absolute inset-0 letter-flipped"
                data-letter="D"
                style={{ transform: "scale(1.01)" }}
              />
              <div className="opacity-0">D</div>
            </div>
            <div
              className="letter-wrapper font-anton relative text-white"
              data-letter="O"
              style={{ perspective: "250px", lineHeight: 1 }}
            >
              <div
                className="letter letter-follow absolute inset-0 letter-flipped"
                data-letter="O"
              />
              <div
                className="letter letter-lead absolute inset-0 letter-flipped"
                data-letter="O"
                style={{ transform: "scale(1.01)" }}
              />
              <div className="opacity-0">O</div>
            </div>
            <div
              className="letter-wrapper font-anton relative text-white"
              data-letter="W"
              style={{ perspective: "250px", lineHeight: 1 }}
            >
              <div
                className="letter letter-follow absolute inset-0 letter-flipped"
                data-letter="W"
              />
              <div
                className="letter letter-lead absolute inset-0 letter-flipped"
                data-letter="W"
                style={{ transform: "scale(1.01)" }}
              />
              <div className="opacity-0">W</div>
            </div>
            <div
              className="letter-wrapper font-anton relative text-white"
              data-letter="N"
              style={{ perspective: "250px", lineHeight: 1 }}
            >
              <div
                className="letter letter-follow absolute inset-0 letter-flipped"
                data-letter="N"
              />
              <div
                className="letter letter-lead absolute inset-0 letter-flipped"
                data-letter="N"
                style={{ transform: "scale(1.01)" }}
              />
              <div className="opacity-0">N</div>
            </div>
            <div
              className="absolute w-full border-black border-t-2 md:border-t-2 lg:border-t-4"
              style={{ top: "47%", borderColor: "rgb(13, 13, 13)" }}
            />
          </div>
        </div>
      </div>
  
    )
}
