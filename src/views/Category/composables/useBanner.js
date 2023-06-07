//封装banner业务
import { ref,onMounted } from "vue"
import { getBannerAPI } from '@/apis/home'
    //获取banner
 export   function useBanner(){
const bannerList = ref([])

const getBanner = async () => {
  const res = await getBannerAPI({
    distributionSite:'1'
  })
  console.log(res)
  bannerList.value = res.result
}

onMounted(() => getBanner())
return{
    bannerList
}
}