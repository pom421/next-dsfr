import Link from "next/link"
import * as React from "react"
import { LinkButton } from "./Button"

type Props = {}

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
                    Intitulé
                    <br />
                    officiel
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
              <div className="fr-header__service">
                <a
                  href="/"
                  title="Accueil - [À MODIFIER - Nom du site / service] - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)"
                >
                  <p className="fr-header__service-title">Nom du site / service</p>
                </a>
                <p className="fr-header__service-tagline">baseline - précisions sur l‘organisation</p>
              </div>
            </div>
            <div className="fr-header__tools">
              <div className="fr-header__tools-links">
                <ul className="fr-btns-group">
                  <li>
                    <LinkButton href="creer" leftIcon="add-circle-line">
                      Créer un espace
                    </LinkButton>
                  </li>
                  <li>
                    <LinkButton href="creer" leftIcon="lock-line">
                      Se connecter
                    </LinkButton>
                  </li>
                  <li>
                    <LinkButton href="creer" leftIcon="account-line">
                      S’enregistrer
                    </LinkButton>
                  </li>
                  <li>
                    <Link href="/aide" passHref>
                      <LinkButton leftIcon="account-line">Aller sur une autre page</LinkButton>
                    </Link>
                  </li>
                </ul>
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
