//封装分类业务
import { getCategoryAPI} from '@/apis/category'
import { ref,onMounted } from 'vue';
//获取路由id参数
import { useRoute } from 'vue-router';
import { onBeforeRouteUpdate } from 'vue-router';
export function useCategory(){
    const categoryData = ref({})
const route =useRoute()
const getCategory = async (id=route.params.id) => {
  const res = await getCategoryAPI(id)
  categoryData.value = res.result
}
onMounted(() => getCategory())
//onUpdated(() => getCategory())

onBeforeRouteUpdate((to)=>{
 // console.log('sss')
  getCategory(to.params.id)
 
})
//以对象的方式return
return{
    categoryData
  }
}
