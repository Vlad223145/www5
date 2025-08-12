export default function ProcessSection() {
  return (
    <section className="flex flex-col items-center justify-start bg-white max-w-[1440px] w-full overflow-hidden px-20 pt-0 pb-24 relative gap-16">
      <div className="flex flex-col items-center justify-start relative w-full gap-8">
        <div className="flex flex-col items-center justify-start relative w-full gap-12">
          
          {/* Header */}
          <div className="flex flex-col items-center justify-start max-w-[768px] w-full relative gap-5">
            <div className="flex flex-col items-center justify-start relative w-full gap-3">
              <div className="flex flex-col justify-start overflow-wrap-anywhere relative w-full whitespace-pre-wrap">
                <h2 className="text-[#030712] font-general-sans text-5xl font-medium leading-[67.2px] overflow-wrap-anywhere text-center whitespace-pre-wrap">
                  Our Process
                </h2>
              </div>
            </div>
            
            <div className="flex flex-col justify-start overflow-wrap-anywhere relative w-full whitespace-pre-wrap">
              <p className="text-[#667084] font-general-sans text-xl leading-7 overflow-wrap-anywhere text-center whitespace-pre-wrap">
                We take grate care in every step of our making coffee
                process
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="flex flex-col items-start justify-start relative w-full gap-16">
        <div className="flex items-start justify-start relative w-full gap-6">
          
          {/* Roasting */}
          <div className="flex flex-col items-center justify-start flex-grow h-full py-6 relative gap-9">
            <div className="relative h-[77px] w-[78px] flex-shrink-0" aria-hidden="true">
              <div className="h-full w-full">
                <svg className="h-full w-full overflow-clip" viewBox="0 0 78 77" preserveAspectRatio="none" width="100%" height="100%">
                  <path d="M53.4099 26.02L51.1877 25.096C49.7753 28.4851 47.293 31.319 44.1194 33.1654L45.3429 35.2384C48.9652 33.1274 51.7981 29.8902 53.4099 26.02Z" fill="black"/>
                  <path d="M7.4505 43.8695C7.13141 43.8695 6.82539 43.9963 6.59976 44.2219C6.37413 44.4475 6.24738 44.7536 6.24738 45.0726V71.7471C6.24738 72.0662 6.37413 72.3722 6.59976 72.5979C6.82539 72.8235 7.13141 72.9503 7.4505 72.9503H22.7422C23.0613 72.9503 23.3673 72.8235 23.593 72.5979C23.8186 72.3722 23.9453 72.0662 23.9453 71.7471V65.9372H41.2583C42.8675 69.1471 45.3913 71.8086 48.5113 73.5858C51.6312 75.363 55.2077 76.1765 58.7894 75.9235C62.3712 75.6705 65.7978 74.3624 68.637 72.1642C71.4762 69.9661 73.6008 66.9763 74.7428 63.5721C75.8848 60.1679 75.993 56.5017 75.0538 53.036C74.1147 49.5703 72.1702 46.4604 69.4656 44.0986C66.761 41.7368 63.4176 40.2288 59.857 39.7649C56.2964 39.3011 52.6782 39.9021 49.4588 41.4921V40.8641C53.2285 38.4972 56.3382 35.2154 58.4988 31.3238C60.6594 27.4322 61.8005 23.0574 61.8161 18.6063C61.8161 18.2872 61.6894 17.9812 61.4637 17.7556C61.2381 17.5299 60.9321 17.4032 60.613 17.4032H43.2182V10.081H60.619C60.9381 10.081 61.2441 9.9542 61.4697 9.72857C61.6954 9.50294 61.8221 9.19692 61.8221 8.87783V2.30396H59.4159V7.67471H29.0875C28.7684 7.67471 28.4624 7.80146 28.2368 8.02709C28.0111 8.25272 27.8844 8.55874 27.8844 8.87783V17.4044H10.4836C10.1645 17.4044 9.85847 17.5311 9.63284 17.7568C9.40721 17.9824 9.28045 18.2884 9.28045 18.6075C9.28507 23.061 10.4218 27.4402 12.5838 31.3337C14.7459 35.2272 17.8623 38.5071 21.6402 40.8653V43.8671L7.4505 43.8695ZM21.5391 70.544H8.65363V65.9372H21.5391V70.544ZM22.7422 63.531H8.65363V46.2758H43.4167C42.9282 46.8804 42.4789 47.5158 42.0716 48.1779H22.0721C21.753 48.1779 21.447 48.3047 21.2213 48.5303C20.9957 48.7559 20.869 49.0619 20.869 49.381V60.4257C20.869 60.7448 20.9957 61.0508 21.2213 61.2765C21.447 61.5021 21.753 61.6288 22.0721 61.6288H39.7243C39.8658 62.2721 40.0425 62.9071 40.2537 63.531H22.7422ZM39.3754 59.2226H23.2752V50.5842H40.7915C39.8078 52.8522 39.3008 55.2982 39.302 57.7704C39.302 58.2613 39.3333 58.7426 39.3754 59.2226ZM73.2109 57.7704C73.2109 60.8857 72.2871 63.931 70.5564 66.5213C68.8257 69.1115 66.3657 71.1304 63.4876 72.3226C60.6095 73.5148 57.4425 73.8268 54.3871 73.2192C51.3317 72.6115 48.5251 71.1115 46.3222 68.9087C44.1192 66.706 42.619 63.8995 42.0111 60.8441C41.4032 57.7887 41.7149 54.6217 42.9069 51.7435C44.0989 48.8653 46.1176 46.4052 48.7078 44.6743C51.2979 42.9434 54.3431 42.0194 57.4584 42.0191C61.6346 42.0236 65.6386 43.6845 68.5918 46.6374C71.5449 49.5904 73.2061 53.5942 73.2109 57.7704ZM30.2906 10.081H40.812V17.4044H30.2906V10.081ZM23.4521 39.1485C20.0481 37.1486 17.194 34.3347 15.146 30.9595C13.0979 27.5844 11.92 23.7534 11.718 19.8106H59.3858C59.1706 23.7508 57.987 27.5772 55.9398 30.9507C53.8926 34.3242 51.0451 37.1408 47.6493 39.1509C47.4693 39.2573 47.3202 39.4088 47.2166 39.5905C47.113 39.7721 47.0585 39.9776 47.0586 40.1868V42.9094C46.6255 43.2126 46.2044 43.5302 45.8001 43.8719H24.0464V40.1844C24.0461 39.9749 23.9911 39.7691 23.8868 39.5875C23.7826 39.4058 23.6327 39.2544 23.4521 39.1485Z" fill="black"/>
                  <path d="M35.5519 53.1155C35.1983 53.1155 34.8526 53.2204 34.5586 53.4168C34.2646 53.6133 34.0354 53.8925 33.9001 54.2192C33.7648 54.5459 33.7294 54.9054 33.7984 55.2522C33.8674 55.599 34.0377 55.9175 34.2877 56.1676C34.5377 56.4176 34.8563 56.5879 35.2031 56.6569C35.5499 56.7259 35.9094 56.6905 36.2361 56.5551C36.5627 56.4198 36.842 56.1907 37.0384 55.8967C37.2349 55.6026 37.3397 55.257 37.3397 54.9034C37.3399 54.6686 37.2937 54.436 37.204 54.219C37.1142 54.002 36.9825 53.8049 36.8164 53.6388C36.6504 53.4728 36.4532 53.3411 36.2362 53.2513C36.0193 53.1615 35.7867 53.1154 35.5519 53.1155Z" fill="black"/>
                  <path d="M57.462 69.6429C61.9677 69.6429 65.4977 64.4285 65.4977 57.7704C65.4977 51.1124 61.9677 45.898 57.462 45.898C52.9563 45.898 49.4275 51.1136 49.4275 57.7704C49.4275 64.4273 52.9563 69.6429 57.462 69.6429ZM63.0914 57.7704C63.216 60.7603 62.1978 63.6854 60.2436 65.9517C60.4572 64.9793 60.5629 63.9864 60.5588 62.9908C60.4147 60.8726 59.706 58.8316 58.5063 57.0799C57.5708 55.7207 56.978 54.1555 56.7786 52.5176C56.6481 51.0646 56.945 49.6052 57.6328 48.3187C60.6046 48.4727 63.0914 52.733 63.0914 57.7704ZM54.5986 49.6806C54.4075 50.6383 54.3296 51.6151 54.3663 52.591C54.565 54.622 55.2681 56.5712 56.4117 58.2613C57.3888 59.6603 57.9888 61.2876 58.1538 62.986C58.2139 64.4501 57.9031 65.9056 57.2502 67.2174C54.2942 67.0201 51.8362 62.7815 51.8362 57.7704C51.7208 54.8244 52.7054 51.9408 54.5986 49.6806Z" fill="black"/>
                </svg>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start relative w-full gap-5">
              <div className="flex flex-col items-start justify-start relative w-full gap-2">
                <div className="flex flex-col justify-start overflow-wrap-anywhere relative w-full whitespace-pre-wrap">
                  <h5 className="text-[#030712] font-general-sans text-xl font-medium leading-7 overflow-wrap-anywhere text-center whitespace-pre-wrap">
                    Roasting
                  </h5>
                </div>
                <div className="flex flex-col justify-start overflow-wrap-anywhere relative w-full whitespace-pre-wrap">
                  <p className="text-[#667084] font-general-sans text-base leading-[22.4px] overflow-wrap-anywhere text-center whitespace-pre-wrap">
                    We roast our beans to highlight their unique
                    flavors and aromas. Each batch is roasted to
                    perfection for optimal quality.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Grinding */}
          <div className="flex flex-col items-center justify-start flex-grow h-full py-6 relative gap-9">
            <div className="relative h-[77px] w-[78px] flex-shrink-0" aria-hidden="true">
              <div className="h-full w-full">
                <svg className="h-full w-full overflow-clip" viewBox="0 0 78 77" preserveAspectRatio="none" width="100%" height="100%">
                  <path d="M65.4688 54.1406H59.7238C58.0503 50.5397 55.4828 47.4513 52.2344 45.1413V36.0938V31.2812C52.2344 30.6171 51.6966 30.0781 51.0312 30.0781H47.452C47.6084 26.5963 49.383 23.3984 52.2993 21.4541C56.0254 18.9709 58.25 14.8141 58.25 10.3373V8.42188H59.4531C60.1185 8.42188 60.6562 7.88287 60.6562 7.21875V4.8125C60.6562 2.82253 59.0368 1.20312 57.0469 1.20312H20.9531C18.9632 1.20312 17.3438 2.82253 17.3438 4.8125V7.21875C17.3438 7.88287 17.8815 8.42188 18.5469 8.42188H19.75V10.3373C19.75 14.8153 21.9746 18.9709 25.6995 21.4541C28.617 23.3984 30.3916 26.5963 30.5468 30.0781H26.9688C26.3034 30.0781 25.7656 30.6171 25.7656 31.2812V36.0938V45.1376C19.732 49.4304 16.1406 56.3472 16.1406 63.7656V66.3932C14.7438 66.8913 13.7344 68.2148 13.7344 69.7812V74.5938C13.7344 75.2579 14.2722 75.7969 14.9375 75.7969H63.0625C63.7278 75.7969 64.2656 75.2579 64.2656 74.5938V69.7812C64.2656 68.2148 63.2562 66.8913 61.8594 66.3932V63.7656C61.8594 62.9607 61.8016 62.157 61.7186 61.3594H65.4688C67.4587 61.3594 69.0781 59.74 69.0781 57.75C69.0781 55.76 67.4587 54.1406 65.4688 54.1406Z" fill="black"/>
                </svg>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start relative w-full gap-5">
              <div className="flex flex-col items-start justify-start relative w-full gap-2">
                <div className="flex flex-col justify-start overflow-wrap-anywhere relative w-full whitespace-pre-wrap">
                  <h5 className="text-[#030712] font-general-sans text-xl font-medium leading-7 overflow-wrap-anywhere text-center whitespace-pre-wrap">
                    Grinding
                  </h5>
                </div>
                <div className="flex flex-col justify-start overflow-wrap-anywhere relative w-full whitespace-pre-wrap">
                  <p className="text-[#667084] font-general-sans text-base leading-[22.4px] overflow-wrap-anywhere text-center whitespace-pre-wrap">
                    Our beans are ground to the ideal consistency for
                    each brew. We use precise grinding techniques to
                    match different brewing methods.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Brewing */}
          <div className="flex flex-col items-center justify-start flex-grow h-full py-6 relative gap-9">
            <div className="relative h-[77px] w-[78px] flex-shrink-0" aria-hidden="true">
              <div className="h-full w-full">
                <svg className="h-full w-full overflow-clip" viewBox="0 0 78 77" preserveAspectRatio="none" width="100%" height="100%">
                  <path d="M69.948 39.7031H60.323V35.5345L63.0935 33.6875H66.3386C66.6577 33.6875 66.9637 33.5607 67.1893 33.3351C67.415 33.1095 67.5417 32.8035 67.5417 32.4844V15.6406C67.5417 15.3215 67.415 15.0155 67.1893 14.7899C66.9637 14.5643 66.6577 14.4375 66.3386 14.4375H62.7292V12.0313C62.7304 10.0333 62.1093 8.08448 60.9524 6.45554C59.7954 4.8266 58.16 3.59833 56.2731 2.9413C54.3862 2.28427 52.3416 2.23109 50.4231 2.78913C48.5046 3.34717 46.8075 4.48874 45.5674 6.05533L41.7597 6.81691C40.8235 7.00436 39.9905 7.53312 39.4225 8.30046C38.8545 9.06779 38.592 10.0189 38.6861 10.9689C38.7802 11.919 39.2241 12.8001 39.9316 13.4412C40.6391 14.0822 41.5596 14.4373 42.5143 14.4375H36.2605V12.0313C36.2616 10.0333 35.6406 8.08448 34.4836 6.45554C33.3267 4.8266 31.6912 3.59833 29.8043 2.9413C27.9174 2.28427 25.8728 2.23109 23.9543 2.78913C22.0358 3.34717 20.3387 4.48874 19.0986 6.05533L15.2909 6.81691C14.3548 7.00436 13.5218 7.53312 12.9538 8.30046C12.3857 9.06779 12.1233 10.0189 12.2174 10.9689C12.3114 11.919 12.7554 12.8001 13.4628 13.4412C14.1703 14.0822 15.0909 14.4373 16.0456 14.4375H10.9948C10.6758 14.4375 10.3697 14.5643 10.1441 14.7899C9.91848 15.0155 9.79172 15.3215 9.79172 15.6406V32.4844C9.79172 32.8035 9.91848 33.1095 10.1441 33.3351C10.3697 33.5607 10.6758 33.6875 10.9948 33.6875H14.24L17.0105 35.5345V64.9688H10.9948C10.6758 64.9688 10.3697 65.0955 10.1441 65.3211C9.91848 65.5468 9.79172 65.8528 9.79172 66.1719V73.3906C9.79172 73.7097 9.91848 74.0157 10.1441 74.2414C10.3697 74.467 10.6758 74.5938 10.9948 74.5938H66.3386C66.6577 74.5938 66.9637 74.467 67.1893 74.2414C67.415 74.0157 67.5417 73.7097 67.5417 73.3906V66.1719C67.5417 65.8528 67.415 65.5468 67.1893 65.3211C66.9637 65.0955 66.6577 64.9688 66.3386 64.9688H60.323V49.3281H69.948C71.2243 49.3281 72.4484 48.8211 73.3509 47.9186C74.2534 47.0161 74.7605 45.792 74.7605 44.5156C74.7605 43.2393 74.2534 42.0152 73.3509 41.1127C72.4484 40.2102 71.2243 39.7031 69.948 39.7031Z" fill="black"/>
                </svg>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start relative w-full gap-5">
              <div className="flex flex-col items-start justify-start relative w-full gap-2">
                <div className="flex flex-col justify-start overflow-wrap-anywhere relative w-full whitespace-pre-wrap">
                  <h5 className="text-[#030712] font-general-sans text-xl font-medium leading-7 overflow-wrap-anywhere text-center whitespace-pre-wrap">
                    Brewing
                  </h5>
                </div>
                <div className="flex flex-col justify-start overflow-wrap-anywhere relative w-full whitespace-pre-wrap">
                  <p className="text-[#667084] font-general-sans text-base leading-[22.4px] overflow-wrap-anywhere text-center whitespace-pre-wrap">
                    We brew each cup with expert methods to ensure
                    perfect flavor and aroma. The process balances
                    flavor, aroma, and texture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
