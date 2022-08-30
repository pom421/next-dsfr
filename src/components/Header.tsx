import Link from "next/link"
import * as React from "react"
import { LinkButton } from "./Button"

type HeaderServiceProps = { title?: string; precisionTitle?: string }

export const HeaderService: React.FC<HeaderServiceProps> = ({
  title = "Nom du site / service",
  precisionTitle = "baseline - précisions sur l‘organisation",
}) => {
  return (
    <div className="fr-header__service">
      <a href="/" title={`Accueil - ${title}`}>
        <p className="fr-header__service-title">{title}</p>
      </a>
      <p className="fr-header__service-tagline">{precisionTitle}</p>
    </div>
  )
}

export const HeaderButtonGroup: React.FC<unknown> = ({ children }) => {
  return (
    <ul className="fr-btns-group">
      {children.map((elt, index) => (
        <li key={index}>{elt}</li>
      ))}
    </ul>
  )
}

export const Header: React.FC<Props> = ({}) => {
  return (
    <header role="banner" className="fr-header">
      <div className="fr-header__body">
        <div className="fr-container">
          <div className="fr-header__body-row">
            <div className="fr-header__brand fr-enlarge-link">
              <div className="fr-header__brand-top">
                <div className="fr-header__logo">
                  <p className="fr-logo">
                    République
                    <br />
                    Française
                  </p>
                </div>
                <div className="fr-header__navbar">
                  <button
                    className="fr-btn--menu fr-btn"
                    data-fr-opened="false"
                    aria-controls="modal-499"
                    aria-haspopup="menu"
                    id="button-500"
                    title="Menu"
                  >
                    Menu
                  </button>
                </div>
              </div>
              <HeaderService title="Index Egapro" precisionTitle="Ministère des Affaires Sociales" />
            </div>
            <div className="fr-header__tools">
              <div className="fr-header__tools-links">
                <HeaderButtonGroup>
                  <LinkButton href="https://www.yahoo.fr" leftIcon="add-circle-line">
                    Aller sur page externe
                  </LinkButton>
                  <LinkButton leftIcon="lock-line">Se connecter</LinkButton>
                  <LinkButton href="creer" leftIcon="account-line">
                    S’enregistrer
                  </LinkButton>
                  <Link href="/aide" passHref>
                    <LinkButton leftIcon="account-line">Aller sur une page interne xx</LinkButton>
                  </Link>
                </HeaderButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fr-header__menu fr-modal" id="modal-499" aria-labelledby="button-500">
        <div className="fr-container">
          <button className="fr-btn--close fr-btn" aria-controls="modal-499" title="Fermer">
            Fermer
          </button>
          <div className="fr-header__menu-links"></div>
        </div>
      </div>
    </header>
  )
}
