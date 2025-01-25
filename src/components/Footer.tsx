import facebook from "../../public/icons/ic_facebook.svg";
import twitter from "../../public/icons/ic_twitter.svg";
import youtube from "../../public/icons/ic_youtube.svg";
import instagram from "../../public/icons/ic_instagram.svg";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-[160px] bg-gray-900 py-8">
      <div className="max-w-[1120px] w-full flex justify-between items-center m-auto text-gray-200 text-base font-normal leading-[19.09px]">
        <div>©codeit - 2025</div>
        <div className="flex gap-3">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <div className="flex gap-3">
          <Link
            href="https://www.facebook.com"
            target="_blank"
            title="페이스북으로 이동"
            rel="noopener noreferrer"
          >
            <Image src={facebook} alt="facebook" />
          </Link>
          <Link
            href="https://twitter.com/codeitkr"
            target="_blank"
            title="트위터로 이동"
            rel="noopener noreferrer"
          >
            <Image src={twitter} alt="twitter" />
          </Link>
          <Link
            href="https://www.youtube.com/@codeitkr"
            target="_blank"
            title="유튜브로 이동"
            rel="noopener noreferrer"
          >
            <Image src={youtube} alt="youtube" />
          </Link>
          <Link
            href="https://www.instagram.com/codeitkr"
            target="_blank"
            title="인스타그램으로 이동"
            rel="noopener noreferrer"
          >
            <Image src={instagram} alt="instagram" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
