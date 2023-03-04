import { useEffect, useRef } from "react";

const usePortal = () => {
  const portalRef = useRef(null);
  const cleanupCalledRef = useRef(false);

  if (!portalRef.current) {
    const portalNode = document.createElement("div");
    portalNode.setAttribute("id", "portal");
    document.body.appendChild(portalNode);
    portalRef.current = portalNode;
  }

  useEffect(() => {
    return () => {
      if (
        !cleanupCalledRef.current &&
        portalRef.current &&
        portalRef.current.parentNode
      ) {
        cleanupCalledRef.current = true;
        portalRef.current.parentNode.removeChild(portalRef.current);
      }
    };
  }, []);

  return portalRef.current;
};

export default usePortal;
