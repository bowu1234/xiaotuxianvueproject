import { ref, onMounted } from "vue";
import { onBeforeRouteUpdate, RouterLink, useRoute } from "vue-router";
import { getCategoryAPI } from "@/apis/category";

export function useCategory() {
  const categoryData = ref({ children: [] });
  const route = useRoute();
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id);
    console.log(res + "category");
    categoryData.value = res.result;
  };
  onMounted(() => getCategory());
  onBeforeRouteUpdate((to) => {
    // console.log("路有变化了");
    getCategory(to.params.id);
  });

  // onBeforeUpdate(() => getCategory());

  return {
    categoryData,
  };
}
