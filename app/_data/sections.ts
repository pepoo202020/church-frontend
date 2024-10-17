interface SECTIONIF {
  title: string;
  subtitle: string;
  imageUrl: string;
  link: string;
}
export const sections: SECTIONIF[] = [
  {
    title: "عن الكنيسة",
    subtitle: "عن تاريخ الكنيسة وعن شهيد الكنيسة",
    imageUrl: "/image/icons/churchIcon.png",
    link: "/about",
  },
  {
    title: "خدمات الكنيسة",
    subtitle: "جميع خدمات الكنيسة مع مواقعها ومواعيدها",
    imageUrl: "/image/icons/servicesIcon.png",
    link: "/services",
  },
  {
    title: "اخبار الكنيسة",
    subtitle: "جميع اخبار الكنيسة وتتبيهاتها",
    imageUrl: "/image/icons/newsIcon.png",
    link: "/news",
  },
  {
    title: "مكتبة الكنيسة",
    subtitle: "يوحد بها كتب الخدمات وكل ما يخص الميديا",
    imageUrl: "/image/icons/booksIcon.png",
    link: "/library",
  },
  /*{
      title: "علوم الكنيسة",
      subtitle: "طقس و قبطي و تاريخ الكنيسة",
      imageUrl: "/image/icons/scienceIcon.png",
      link: "/science",
    }, */
  {
    title: "تواصل معنا",
    subtitle: "للتواصل مع الكنيسة ومع خدام الخدمات المختلفة",
    imageUrl: "/image/icons/phoneIcon.png",
    link: "/contact",
  },
];
