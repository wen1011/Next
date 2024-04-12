import Giscus from "@giscus/react";
import { useTheme } from "next-themes";
import { giscusConfigs } from "@/configs/giscusConfigs";
import { useRouter } from 'next/router';
 const Comment=()=>{
    const { locale } = useRouter();
    const {theme}=useTheme();
    return(
        <div id="comment" className="max-auto max-w-prose py-6">
            <Giscus 
            repo={giscusConfigs.repo}
            repoId={giscusConfigs.repoId}
            category={giscusConfigs.category}
            categoryId={giscusConfigs.categoryId}
            mapping="pathname"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom"
            theme={theme === 'dark' ? 'transparent_dark' : 'light'}
            loading="lazy"
            lang={locale}
            />
        </div>
    )
 }
 export default Comment