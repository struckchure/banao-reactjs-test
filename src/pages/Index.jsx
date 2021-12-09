import React from "react";

import BaseLayout from "@/layouts/BaseLayout";
import Nav from "@/components/nav/Nav";
import IntroContent from "@/components/nav/IntroContent";
import ArticleListLayout from "@/layouts/ArticleListLayout";
import Container from "@/layouts/Container";

export default function Index() {
  const is_authenticated = false;

  return (
    <BaseLayout>
      {/* nav */}
      <Nav is_authenticated={is_authenticated} />

      {/* intro */}
      <IntroContent />

      <Container>
        {/* articles */}
        <ArticleListLayout />
      </Container>
    </BaseLayout>
  );
}
