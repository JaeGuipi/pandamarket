import BoxButton from "@/components/button/btn";
import Image from "next/image";
import hero from "../../public/landing/section1.svg";
import main1 from "../../public/landing/main1.svg";
import main2 from "../../public/landing/main2.svg";
import main3 from "../../public/landing/main3.svg";
import hero2 from "../../public/landing/section2.svg";

export default function Home() {
  return (
    <div>
      <main>
        <section className="h-[540px] bg-[#CFE5FF] flex items-end justify-center">
          <div className="flex items-center justify-center gap-2">
            <div className="flex flex-col items-center justify-center h-full gap-8">
              <h1 className="text-4xl font-bold text-gray-700 leading-[56px]">
                일상의 모든 물건을 <br /> 거래해 보세요
              </h1>
              <BoxButton size="large">구경하러 가기</BoxButton>
            </div>
            <Image src={hero} alt="hero" width={746} height={340} />
          </div>
        </section>
        {/* 메인 1 */}
        <section className="my-[138px] flex items-center justify-center">
          <div className="w-[988px] bg-[#FCFCFC] flex items-center justify-center gap-16 rounded-xl">
            <Image src={main1} alt="main1" />
            <div className="flex flex-col gap-3 pr-6">
              <p className="text-primary-200 leading-[26px] text-lg font-bold">
                Hot Item
              </p>
              <p className="leading-[56px] text-[40px] font-bold text-gray-700">
                인기 상품을 <br /> 확인해보세요
              </p>
              <p className="leading-8 text-[24px] font-medium text-gray-700">
                가장 HOT한 중고거래 물품을
                <br />
                판다 마켓에서 확인해 보세요
              </p>
            </div>
          </div>
        </section>
        {/* 메인 2 */}
        <section className="my-[138px] flex items-center justify-center">
          <div className="w-[988px] bg-[#FCFCFC] flex items-center justify-center gap-16 rounded-xl">
            <div className="flex flex-col text-right gap-3 pl-6">
              <p className="text-primary-200 leading-[26px] text-lg font-bold">
                Search
              </p>
              <p className="leading-[56px] text-[40px] font-bold text-gray-700">
                구매를 원하는 <br /> 상품을 검색하세요
              </p>
              <p className="leading-8 text-[24px] font-medium text-gray-700">
                구매하고 싶은 물품은 검색해서 <br />
                쉽게 찾아보세요
              </p>
            </div>
            <Image src={main2} alt="main1" />
          </div>
        </section>
        {/* 메인 3 */}
        <section className="my-[138px] flex items-center justify-center">
          <div className="w-[988px] bg-[#FCFCFC] flex items-center justify-center gap-8 rounded-xl">
            <Image src={main3} alt="main3" />
            <div className="flex flex-col gap-3 pr-6">
              <p className="text-primary-200 leading-[26px] text-lg font-bold">
                Register
              </p>
              <p className="leading-[56px] text-[40px] font-bold text-gray-700">
                판매를 원하는 <br />
                상품을 등록하세요
              </p>
              <p className="leading-8 text-[24px] font-medium text-gray-700">
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </p>
            </div>
          </div>
        </section>
        <section className="h-[540px] bg-[#CFE5FF] flex items-end justify-center">
          <div className="flex items-center justify-center gap-2">
            <div className="flex flex-col items-center justify-center h-full gap-8">
              <h1 className="text-4xl font-bold leading-[56px] text-gray-700">
                믿을 수 있는 <br /> 판다마켓 중고거래
              </h1>
            </div>
            <Image src={hero2} alt="hero2" width={746} height={340} />
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
