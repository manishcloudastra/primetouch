import BannerSection from "@/components/Home/BannerSection";
import CategorySection from "@/components/Home/CategorySection";
import ProductListing from "@/components/ProductListing/ProductListing";
import { fourMenProducts, fourWomenProducts } from "./(mock-data)/products";

export default function Home() {
    return (
        <div className="mt-20">
            <BannerSection />
            <CategorySection />
            <ProductListing heading="the best dress for the best woman" row1={fourWomenProducts} row2={fourWomenProducts} />
            <ProductListing heading="Best outfit for your happiness" row1={fourMenProducts} row2={fourMenProducts}  />
        </div>
    )
}
