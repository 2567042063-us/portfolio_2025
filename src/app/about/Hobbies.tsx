import Link from "next/link";

export default function Hobbies() {
  return (
    <>
      <p>
        I am so into cycling to the countryside, go through uncharted territory,
        enjoy slow living amid lush greenery, expansive rice fields and get some
        fresh air.
      </p>
      <p>
        I got achievement ⭑.ᐟ for this special hobby:{" "}
        <Link
          href="https://vietrace365.com.vn/certificate/6656d4b60f9d6e3372bb911a"
          rel="nofollow noreferrer"
          className="text-sky-700 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300"
          target="_blank"
        >
          one here
        </Link>{" "}
        and ᯓ to be continue ᯓ ᡣ𐭩
      </p>

      {/* <div className="mx-auto pt-5 px-5">
        <div className="columns-2 gap-1 sm:columns-3 sm:gap-3 [&>img:not(:first-child)]:mt-1 sm:[&>img:not(:first-child)]:mt-3">
          {images.map((image, index) => (
            <img
              key={index}
              className="h-auto max-w-full"
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>
      </div> */}
    </>
  );
}

/**
 * const images = [
  {
    src: "https://res.cloudinary.com/dpzkswl8u/image/upload/v1706886112/IMG_6291_pa1hzj.jpg",
    alt: "Miếu Nổi Phù Châu",
  },
  {
    src: "https://res.cloudinary.com/dpzkswl8u/image/upload/v1712710984/mieunoi_nguhanhmon_fx2cyy.jpg",
    alt: "Miếu Nổi Phù Châu - Ngũ Hành Môn",
  },
  {
    src: "https://res.cloudinary.com/dpzkswl8u/image/upload/v1712712138/ben_binh_dong_spfjup.jpg",
    alt: "Bến Bình Đông",
  },
  {
    src: "https://res.cloudinary.com/dpzkswl8u/image/upload/v1706887989/IMG_5590_urfx1m.jpg",
    alt: "Bình Dương",
  },
  {
    src: "https://res.cloudinary.com/dpzkswl8u/image/upload/v1712710975/hosamac_hdef0s.jpg",
    alt: "Hồ Sa Mạc",
  },
  {
    src: "https://res.cloudinary.com/dpzkswl8u/image/upload/v1706886115/IMG_5370_u0qgen.jpg",
    alt: "Cần Giờ",
  },
  {
    src: "https://res.cloudinary.com/dpzkswl8u/image/upload/v1706886112/IMG_5786_jftlov.jpg",
    alt: "Tân An",
  },
  {
    src: "https://res.cloudinary.com/dpzkswl8u/image/upload/v1712710985/mung3_mx70mf.jpg",
    alt: "Mùng 3 Tết",
  },
  {
    src: "https://res.cloudinary.com/dpzkswl8u/image/upload/v1712712138/langmai_t9b89s.jpg",
    alt: "Làng Mai Bình Lợi",
  },
];
 */
