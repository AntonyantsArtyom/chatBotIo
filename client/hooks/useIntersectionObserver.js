const useIntersectionObserver = (target, callback) => {
   let options = { threshold: 1.0 }
   let observer = new IntersectionObserver((data) => {
      if (data[0].isIntersecting == true) callback()
   }, options)
   observer.observe(target)
}

export default useIntersectionObserver
