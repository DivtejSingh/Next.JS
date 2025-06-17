"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import onloadImg from "../../../assests/white_logo.png";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, addProduct, addToCart } from "@/app/store/slice/ProductSlice";
import CheckIcon from "@mui/icons-material/Check";
import { RootState } from "@/app/store/Store";
import { ProductsModels } from "@/app/modal/ProductModels";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "@/app/components/loading/Loading";
import { useTranslation } from "react-i18next";
import "swiper/css/navigation";
import { getFromLocalStorage, setInLocalStorage } from "@/app/utills/LocalStorageUtills";
import "../../../i18n";
// import "swiper/css";

interface TranslatedCategory {
  Name: Record<string, string>;
  Category: Record<string, string>;
  id: string;
}

interface TranslatedProduct {
  Name: Record<string, string>;
  category: Record<string, string>;
  meal: Record<string, string>;
  id: string;
  ImageUrl: string;
}

<<<<<<< HEAD
type MealType = "breakfast" | "lunch" | "dinner";

=======
>>>>>>> master
interface SwiperSliderProps {
  params: { id: string };
}

const SwiperSlider: React.FC<SwiperSliderProps> = ({ params }) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [lang, setLang] = useState(false);
  const [categorySelection, setCategorySelection] = useState<Record<string, boolean>>({});
  const category = useSelector((state: RootState) => state.Product.category);
  const product = useSelector((state: RootState) => state.Product.products);
  const cart = useSelector((state: RootState) => state.Product.cart);
  const [swiper, setSwiper] = useState<any>(null);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
<<<<<<< HEAD
=======
  const [productData, setProductData] = useState([]);
>>>>>>> master
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  const savedLanguage: any = getFromLocalStorage("lang") || "en";

  const fetchCategory = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "Categorydemo"));
      const categoryList: TranslatedCategory[] = querySnapshot.docs.map((doc) => {
        const data = doc.data() as TranslatedCategory;
        return {
          ...data,
          id: doc.id,
        };
      });

      const translatedData: any = categoryList.map((item) => ({
        ...item,
        Name: item.Name[i18n.language] || item.Name[savedLanguage as string] || "",
        Category: item.Category[i18n.language] || item.Category[savedLanguage as string] || "",
      }));

      dispatch(addCategory(translatedData));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "Productsdemo"));
      const productList: TranslatedProduct[] = querySnapshot.docs.map((doc) => {
        const data = doc.data() as TranslatedProduct;
        return {
          ...data,
          id: doc.id,
        };
      });

      const translatedData: any = productList.map((item) => ({
        ...item,
        Name: item.Name[i18n.language] || item.Name[savedLanguage as string] || item.Name || "",
<<<<<<< HEAD
=======
        enCategory: item.category.en,
        enName: item.Name.en,
        ruName: item.Name.ru,
        heName: item.Name.he,
>>>>>>> master
        category: item.category[i18n.language] || item.category[savedLanguage as string] || item.category || "",
        // meal: item.meal[i18n.language] || item.meal[savedLanguage as string] || item.meal || "",
      }));

      dispatch(addProduct(translatedData));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product: ProductsModels) => {
<<<<<<< HEAD
    const mealType: MealType = product.meal.Name.toLowerCase() as MealType;
    dispatch(addToCart(product));
    setCategorySelection((prev) => {
      const updatedSelection = {
        ...prev,
        [product.category]: true,
      };
      setInLocalStorage("categorySelection", JSON.stringify(updatedSelection));
      return updatedSelection;
    });
  };

  const allCategoriesSelected = () => {
    const categorySet = new Set(category.map((cat) => cat.Name));
    const selectedSet = new Set(Object.keys(categorySelection));
    return categorySet.size === selectedSet.size;
=======
    // Retrieve the array from local storage based on the meal type
    let array = getFromLocalStorage(`${product.meal.Name}`) || [];

    // Convert the retrieved value to an array if it's not already one
    if (!Array.isArray(array)) {
      array = [];
    }

    // Check if the product with the same enCategory already exists in the array
    const productIndex = array.findIndex((item: any) => item.enCategory === product.enCategory);

    if (productIndex === -1) {
      // If the product does not exist, add it to the array
      array.push(product);
      let currentCount = parseInt(getFromLocalStorage("currentSelect") || "0");

      // If the value doesn't exist (i.e., it's 0), set it to 1; otherwise, increment it by 1
      if (currentCount === 0) {
        currentCount = 1;
      } else {
        currentCount += 1;
      }

      // Save the updated count back to localStorage
      setInLocalStorage("currentSelect", currentCount);
    } else {
      // If the product exists, update it
      array[productIndex] = product;
    }

    // Store the updated array back in local storage
    setInLocalStorage(`${product.meal.Name}`, array);

    // Dispatch an action to update the Redux state
    dispatch(addToCart(product));
  };

  const allCategoriesSelected = () => {
    let maxSelected = parseInt(getFromLocalStorage("maxSelected"));
    let currentSelected = parseInt(getFromLocalStorage("currentSelect"));
    return maxSelected === currentSelected;
>>>>>>> master
  };

  const handleSlideChange = () => {
    if (swiper) {
      const isLast = swiper.activeIndex === swiper.slides.length - 1;
      setIsLastSlide(isLast);
    }
  };

  useEffect(() => {
    fetchCategory();
    fetchProduct();
    const storedSelection = getFromLocalStorage("categorySelection");
    if (storedSelection) {
      setCategorySelection(JSON.parse(storedSelection));
    }
  }, [i18n.language]);
  useEffect(() => {
    if (getFromLocalStorage("lang") === "he") {
      setLang(true);
    } else {
      setLang(false);
    }
  }, [getFromLocalStorage("lang")]);
<<<<<<< HEAD
=======

  useEffect(() => {
    interface MealCategoryCount {
      mealName: string;
      maxCount: number;
    }

    const mealCategoryMap = product.reduce((acc, product) => {
      const mealName = product.meal.Name.trim();
      const categoryName = product.category.trim();

      if (!acc[mealName]) {
        acc[mealName] = new Set<string>(); // Initialize a set to track unique categories
      }

      acc[mealName].add(categoryName); // Add category to the set

      return acc;
    }, {} as Record<string, Set<string>>);

    const result: MealCategoryCount[] = Object.entries(mealCategoryMap).map(([mealName, categories]) => ({
      mealName,
      maxCount: categories.size, // Count of unique categories
    }));

    const totalMaxCount = result.reduce((acc, curr) => acc + curr.maxCount, 0);

    setInLocalStorage("maxSelected", totalMaxCount);
    setInLocalStorage("category", result);
  });

>>>>>>> master
  return (
    <>
      {loading && <Loading />}
      <section className="main-bg">
<<<<<<< HEAD
        <div className="page_width h-full">
=======
        <div className="page_width h-full ">
>>>>>>> master
          <div className="flex justify-center h-full p-10">
            <Link href={"/"}>
              {" "}
              <Image width={200} height={100} src={onloadImg} alt="onload img" priority />
            </Link>
          </div>

<<<<<<< HEAD
          <Swiper autoHeight={true} modules={[Pagination]} pagination={{ clickable: true }} slidesPerView={1} onSwiper={(swiperInstance) => setSwiper(swiperInstance)} onSlideChange={handleSlideChange}>
=======
          <Swiper
            autoHeight={true}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={1}
            onSwiper={(swiperInstance) => {
              setSwiper(swiperInstance);
            }}
            onSlideChange={handleSlideChange}
          >
            {" "}
>>>>>>> master
            {category
              ?.filter((cat) => cat?.Category == getFromLocalStorage("categoryProduct"))
              .map((item) => {
                return (
                  <div key={item?.id} className="mt-14 ">
                    <SwiperSlide key={`${item?.id}-cat`}>
                      <div className="text-center mt-10">
                        <h1 className={`text-white text-4xl font-semibold  ${lang ? "rtl" : ""}`}>{item?.Name}</h1>
                        <p className={`text-white  ${lang ? "rtl" : ""}`}>{t("choose")}</p>
                        <div className="flex flex-wrap gap-3  sm:grid sm:grid-cols-2 mt-5">
                          {product
<<<<<<< HEAD
                            ?.filter((pro: ProductsModels) => pro.category == item?.Name)
                            .map((prodctItem: ProductsModels) => {
                              const mealType: MealType = prodctItem.meal.Name?.toLowerCase() as MealType;

                              const isActive = cart[mealType]?.some((cartItem: ProductsModels) => cartItem.id == prodctItem.id) ?? false;
=======
                            ?.filter((pro: ProductsModels) => pro.category === item?.Name)
                            .map((prodctItem: ProductsModels) => {
                              let cartData: ProductsModels[] = getFromLocalStorage(`${prodctItem.meal.Name}`) || [];
                              if (typeof cartData === "string") {
                                cartData = JSON.parse(cartData);
                              }

                              const isActive = cartData.some((cartItem: ProductsModels) => cartItem.enCategory === prodctItem.enCategory && cartItem.enName == prodctItem.enName);
>>>>>>> master

                              return (
                                <div className={`flex flex-col w-[49%] cursor-pointer sm:w-[100%] px-4`} key={`${prodctItem?.id}-pro`} data-aos="fade-left">
                                  <div className={`relative productShadow rounded-3xl`} onClick={() => handleAddToCart(prodctItem)}>
                                    {isActive && (
                                      <div className="w-full h-full bg-[#9efeb98a] absolute flex items-center justify-center rounded-3xl">
                                        <CheckIcon sx={{ width: "100px", fontSize: "80px", fill: "white" }} />
                                      </div>
                                    )}
                                    <Image width={349} height={70} className="w-[389px] h-[232px] object-cover rounded-3xl" src={prodctItem?.ImageUrl} alt="" priority />
                                  </div>
<<<<<<< HEAD
                                  <h1 className={`text-black text-xl mt-4 font-semibold sm:text-md sm:font-bold sm:word-break  ${lang ? "rtl" : ""}`}>{prodctItem?.Name}</h1>
=======
                                  <h1 className={`text-black text-xl mt-4 font-semibold sm:text-md sm:font-bold sm:word-break ${lang ? "rtl" : ""}`}>{prodctItem?.Name}</h1>
>>>>>>> master
                                </div>
                              );
                            })}
                        </div>

<<<<<<< HEAD
                        {!isLastSlide && (
                          <div className="bg-[#2f52a0] p-4 mt-8 rounded-xl">
                            <button className={`w-full text-white text-center rounded-xl textShadow  ${lang ? "rtl" : ""}`} onClick={() => swiper.slideNext()}>
                              {t("nextBtn")}
                            </button>
                          </div>
=======
                        {swiper && swiper.slides.length === 1 ? (
                          // Show the "Next" button as a link if there's only one slide
                          <div className="bg-[#2f52a0] p-4 mt-8 rounded-xl">
                            <Link href={"/online_ordering/category"}>
                              <button className={`w-full text-white text-center rounded-xl textShadow  ${lang ? "rtl" : ""}`}>{t("Next")}</button>
                            </Link>
                          </div>
                        ) : (
                          // Show the "Next" button for sliding only if it's not the last slide
                          !isLastSlide && (
                            <div className="bg-[#2f52a0] p-4 mt-8 rounded-xl">
                              <button className={`w-full text-white text-center rounded-xl textShadow  ${lang ? "rtl" : ""}`} onClick={() => swiper.slideNext()}>
                                {t("nextBtn")}
                              </button>
                            </div>
                          )
>>>>>>> master
                        )}
                      </div>
                    </SwiperSlide>
                  </div>
                );
              })}
          </Swiper>
          {isLastSlide && (
<<<<<<< HEAD
            <div className="bg-[#2f52a0] p-4 mt-8 rounded-xl">
=======
            <div className="bg-[#2f52a0]  p-4 mt-8 rounded-xl ">
>>>>>>> master
              {allCategoriesSelected() ? (
                <Link href={"/online_ordering/summery"}>
                  <button className={`w-full text-white text-center rounded-xl textShadow  ${lang ? "rtl" : ""}`}>{t("Order")}</button>
                </Link>
              ) : (
                <Link href={"/online_ordering/category"}>
<<<<<<< HEAD
                  <button className={`w-full text-white text-center rounded-xl textShadow ${lang ? "rtl" : ""}`}>{t("Next")}</button>
=======
                  <button className={`w-full text-white text-center rounded-xl textShadow  ${lang ? "rtl" : ""}`}>{t("Next")}</button>
>>>>>>> master
                </Link>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default SwiperSlider;
