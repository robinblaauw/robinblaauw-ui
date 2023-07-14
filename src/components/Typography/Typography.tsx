import React, { FC, ReactNode } from "react";

import classNames from "classnames";

interface TypographyProps {
  variant: string;
  color?: string;
  children: ReactNode;
  extraClass?: string;
  As?: "h1" | "h2" | "h3" | "h4" | "p";
}

type Variants =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "leading"
  | "intro"
  | "body1"
  | "p"
  | "subtext"
  | "tagline";

const tagnameMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  leading: "p",
  intro: "p",
  body1: "p",
  p: "p",
  subtext: "p",
  tagline: "p",
};

const Typography: FC<TypographyProps> = ({
  variant,
  color,
  children,
  extraClass,
  As,
}) => {
  const Component: any = As || tagnameMapping[variant as Variants];

  const typographyStyles = classNames(
    {
      [`text-${color}`]: color,
    },
    variant,
    extraClass
  );

  return <Component className={typographyStyles}>{children}</Component>;
};

export default Typography;
