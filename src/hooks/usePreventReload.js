import { useCallback, useEffect } from "react"

export const usePreventReload = (isPrevent) => {
	const preventReload = useCallback(event => {
		event.preventDefault();
		event.returnValue = "";
	  }, []);

	useEffect(() => {
		if(isPrevent) {
			window.addEventListener("beforeunload", preventReload);
		}
		return () => {
			window.removeEventListener("beforeunload", preventReload)
		}

	}, [isPrevent, preventReload])
}