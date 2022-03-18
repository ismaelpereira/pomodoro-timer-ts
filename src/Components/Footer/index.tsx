import { ReactComponent as GithubIcon } from "../../public/icons/github.svg";
import { ReactComponent as LinkedinIcon } from "../../public/icons/linkedin.svg";
import { FooterContainer, SocialIconsContainer } from "./styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <p>Powered by Ismael Pereira</p>
      </div>

      <SocialIconsContainer>
        <a
          href="https://github.com/ismaelpereira"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <GithubIcon />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/ismaelfgpereira/"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <LinkedinIcon />
          </span>
        </a>
      </SocialIconsContainer>
    </FooterContainer>
  );
};
