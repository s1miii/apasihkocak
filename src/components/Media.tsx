import { Box } from "@mui/material";
import Link from "next/link";

export default function Media() {
  const mediaList = [
    {
      title: "代码",
      linkText: "Github",
      link: "https://github.com/vectorisvector/inscription",
    },
    {
      title: "开发者",
      linkText: "@cybervector_",
      link: "https://twitter.com/cybervector_",
    },
    {
      title: "Alpha",
      linkText: "@ChaunceyCrypto",
      link: "https://twitter.com/ChaunceyCrypto",
    },
    {
      title: "recode by",
      linkText: "Simi",
      link: "https://facebook.com/b3lalang",
    },
  ];

  return (
    <div className=" py-4">
      <div className=" flex items-center justify-center gap-x-4 max-sm:flex-col">
        {mediaList.map(({ title, linkText, link }) => {
          return (
            <div
              key={title}
              className=" flex items-center gap-2 text-xl"
            >
              <span>{title}:</span>
              <Box
                component={Link}
                href={link}
                className=" hover:underline"
                sx={{
                  color: "primary.main",
                }}
              >
                {linkText}
              </Box>
            </div>
          );
        })}
      </div>

      <div className=" text-center">
        tip bang☕️: 0x3b5B9367fbB7CCEAdC5B4894e4674c904b52149d
      </div>
    </div>
  );
}
