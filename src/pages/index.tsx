import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

import Layout from '@/components/layout/layout';
// import useTools from '@/hooks/useToolsList';
import fetcher from '@/lib/fetcher';

interface Category {
  id: number;
  attributes: {
    Name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

interface Image {
  data?: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        thumbnail: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          path: string | null;
          width: number;
          height: number;
          size: number;
          url: string;
        };
        large: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          path: string | null;
          width: number;
          height: number;
          size: number;
          url: string;
        };
        medium: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          path: string | null;
          width: number;
          height: number;
          size: number;
          url: string;
        };
        small: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          path: string | null;
          width: number;
          height: number;
          size: number;
          url: string;
        };
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: string | null;
      createdAt: string;
      updatedAt: string;
    };
  };
}

interface Data {
  id: number;
  attributes: {
    Name: string;
    Description: string;
    ShortDesc: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    Image: Image;
    categories: {
      data: Category[];
    };
    localizations: {
      data: {
        id: number;
        attributes: {
          Name: string;
          Description: string;
          ShortDesc: string;
          createdAt: string;
          updatedAt: string;
        };
      }[];
    };
  };
}

interface Response {
  data: {
    data: Data[];
  };
}

const Home: React.FC<Response> = ({ data }) => {
  return (
    <Layout>
      <Head>
        <title>Cqwep</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {data.data.map((item, index) => {
          console.log(item.attributes.Image);
          return (
            <div key={index}>
              {item.attributes.Image.data && item.attributes.Image.data.attributes && (
                <div key={index}>
                  {item.attributes.Name}
                  <Image
                    width={item.attributes.Image.data.attributes.width}
                    height={item.attributes.Image.data.attributes.height}
                    src={
                      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}` +
                      item.attributes.Image.data.attributes.url
                    }
                    alt=""
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await fetcher(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/tools`);

  return {
    props: {
      data,
    },
  };
}

export default Home;
