/** 加载状态hooks */
export default function () {
  const loading = ref<boolean>(false)

  function startLoading(): void {
    loading.value = true
  }

  function endLoading(): void {
    loading.value = false
  }

  return {
    /** 加载状态 */
    loading,
    /** 开始加载 */
    startLoading,
    /** 结束加载 */
    endLoading
  }
}
