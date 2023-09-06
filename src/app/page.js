import BannerSection from "@/components/Home/BannerSection";
import CategorySection from "@/components/Home/CategorySection";
import ProductListing from "@/components/ProductListing/ProductListing";

export default function Home() {
    return (
        <div className="mt-20">
            <BannerSection />
            <CategorySection />
            <ProductListing />
        </div>
    )
}
