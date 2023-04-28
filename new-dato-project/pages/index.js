import { request } from "../lib/datocms";

import Tab from "@/components/Tab";
import Logoblock from "@/components/Logoblock";

const HOMEPAGE_QUERY = `query {
  contentpage {
    core {
      ...coreData
    }
    logoblock {
      core {
        ...coreData
      }
      header
      height
      maxcolumns
      logoimages {
        responsiveImage {
          ...respImg
        }
      }
    }
    tabblock {
      top
      core {
        ...coreData
      }
       tabimages{
         imgblockbasedata{
          title
          description
        }
         blockimage{
          responsiveImage {
            ...respImg
          }
        }
      }
    }
  }
}

fragment coreData on CorecomponentRecord {
  columns
  padding
  margin
  bgcolor {
    hex
  }
}

fragment respImg on ResponsiveImage {
  src
  height
  width
  base64
  sizes
}`;
export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
  });
  console.log(JSON.stringify(data,null,2))
  return {
    props: { data },
  };
}
export default function Home({ data }) {
  return (
    <div
      style={{
        border: `solid 2px red`,
        padding: data?.contentpage?.core[0]?.padding,
        margin: data?.contentpage?.core[0]?.margin,
        backgroundColor: data?.contentpage?.core[0]?.bgcolor?.hex,
      }}
    >
      <Logoblock
        styling={data?.contentpage?.logoblock[0]?.core[0]}
        maxCols={data?.contentpage?.logoblock[0]?.maxcolumns}
        height={data?.contentpage?.logoblock[0]?.height}
        images={data?.contentpage?.logoblock[0]?.logoimages}
      />
      <Tab
        images={data?.contentpage?.tabblock[0]?.tabimages}
        top={data?.contentpage?.tabblock[0]?.top}
        styling={data?.contentpage?.tabblock[0]?.core[0]}
      />
    </div>
  );
}
