import { useIntersectionObserver } from "@vueuse/core";

export const lazyPlugin = {
  install(app) {
    app.directive("img-lazy", {
      mounted(el, binding) {
        // console.log(el, binding.value);
        const { stop } = useIntersectionObserver(el, ([entry]) => {
          console.log(entry.isIntersecting);
          if (entry.isIntersecting) {
            el.src = binding.value;
            stop();
          }
        });
      },
    });
  },
};
