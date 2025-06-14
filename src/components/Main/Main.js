import { ArticlePresentation } from "../ArticlePresentation/ArticlePresentation"
import { ArticleProfile } from "../ArticleProfile/ArticleProfile"
import { SectionCertifications } from "../SectionCertifications/SectionCertifications"
import { SectionProjects } from "../SectionProjects/SectionProjects"
import { SectionTutorials } from "../SectionTutorials/SectionTutorials"

export const Main = () => {
  return (
    <main class="main" >

        <ArticlePresentation />

        <ArticleProfile />

        <SectionProjects />

        <SectionTutorials />

        <SectionCertifications />

    </main>
  )
}
