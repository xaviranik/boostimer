import React from "react";
import ContentLoader from "react-content-loader";

const Loader = () => {
  return (
    <ContentLoader viewBox="0 0 800 400" height={'100%'} width={'100%'} className={"h-full"}>
      <rect x="-8" y="30" rx="4" ry="4" width="120" height="10"  />
      <rect x="12" y="70" rx="3" ry="3" className={"h-2 w-full"} />
      <rect x="12" y="90" rx="3" ry="3" width="422" height="7" />
      <rect x="12" y="120" rx="3" ry="3" width="424" height="7" />

      <rect x="-8" y="170" rx="4" ry="4" width="120" height="10"  />
      <rect x="12" y="190" rx="3" ry="3" className={"h-2 w-full"} />
      <rect x="12" y="210" rx="3" ry="3" width="422" height="7" />
      <rect x="12" y="230" rx="3" ry="3" width="424" height="7" />

      <rect x="-8" y="280" rx="4" ry="4" width="120" height="10"  />
      <rect x="12" y="300" rx="3" ry="3" className={"h-2 w-full"} />
      <rect x="12" y="320" rx="3" ry="3" width="422" height="7" />
      <rect x="12" y="340" rx="3" ry="3" width="424" height="7" />
    </ContentLoader>
  );
}

export default Loader;
