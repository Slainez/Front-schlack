'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">schlack documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-f7994e4ff27d2926174c50fcdc1a75a628bc22c6c17d7c17266efb8df12853feed9e19dd0a6cd9cb92ed3aec0d0793fa575bc532e2361128c0567c6d34484649"' : 'data-target="#xs-components-links-module-AppModule-f7994e4ff27d2926174c50fcdc1a75a628bc22c6c17d7c17266efb8df12853feed9e19dd0a6cd9cb92ed3aec0d0793fa575bc532e2361128c0567c6d34484649"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f7994e4ff27d2926174c50fcdc1a75a628bc22c6c17d7c17266efb8df12853feed9e19dd0a6cd9cb92ed3aec0d0793fa575bc532e2361128c0567c6d34484649"' :
                                            'id="xs-components-links-module-AppModule-f7994e4ff27d2926174c50fcdc1a75a628bc22c6c17d7c17266efb8df12853feed9e19dd0a6cd9cb92ed3aec0d0793fa575bc532e2361128c0567c6d34484649"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ChannelsModule.html" data-type="entity-link" >ChannelsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ChannelsModule-39c280c2c7c2c3b39d55f240bd762ac19eee8e4a68e7a3d3f6cb66e6ef249e6d8e55317837103d2291a201f0b4f3b58e59ef1225bc58a324db7be809b771e7e0"' : 'data-target="#xs-components-links-module-ChannelsModule-39c280c2c7c2c3b39d55f240bd762ac19eee8e4a68e7a3d3f6cb66e6ef249e6d8e55317837103d2291a201f0b4f3b58e59ef1225bc58a324db7be809b771e7e0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChannelsModule-39c280c2c7c2c3b39d55f240bd762ac19eee8e4a68e7a3d3f6cb66e6ef249e6d8e55317837103d2291a201f0b4f3b58e59ef1225bc58a324db7be809b771e7e0"' :
                                            'id="xs-components-links-module-ChannelsModule-39c280c2c7c2c3b39d55f240bd762ac19eee8e4a68e7a3d3f6cb66e6ef249e6d8e55317837103d2291a201f0b4f3b58e59ef1225bc58a324db7be809b771e7e0"' }>
                                            <li class="link">
                                                <a href="components/FormChannelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormChannelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormDeleteChannelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormDeleteChannelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormEditChannelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormEditChannelComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChannelsRoutingModule.html" data-type="entity-link" >ChannelsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-1ec7ffd65b8f6da269383e6ba9d93f369931fef55d3ca090d01f2dd9ac7dc6e61d80cb5dcfb99c55f40161dbe845ee780ebfe6932e578b150d74e370e8482c8f"' : 'data-target="#xs-components-links-module-CoreModule-1ec7ffd65b8f6da269383e6ba9d93f369931fef55d3ca090d01f2dd9ac7dc6e61d80cb5dcfb99c55f40161dbe845ee780ebfe6932e578b150d74e370e8482c8f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-1ec7ffd65b8f6da269383e6ba9d93f369931fef55d3ca090d01f2dd9ac7dc6e61d80cb5dcfb99c55f40161dbe845ee780ebfe6932e578b150d74e370e8482c8f"' :
                                            'id="xs-components-links-module-CoreModule-1ec7ffd65b8f6da269383e6ba9d93f369931fef55d3ca090d01f2dd9ac7dc6e61d80cb5dcfb99c55f40161dbe845ee780ebfe6932e578b150d74e370e8482c8f"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IconsModule.html" data-type="entity-link" >IconsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MessagesModule.html" data-type="entity-link" >MessagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MessagesModule-0c14283287374efcd1843d13642ac464090ee5d471603cc1a17c8d51d8b7f0bd80247e00bf57e9f7ea974a89a1d7996ec1d84e478a1dfac19e1ca98f0d18096b"' : 'data-target="#xs-components-links-module-MessagesModule-0c14283287374efcd1843d13642ac464090ee5d471603cc1a17c8d51d8b7f0bd80247e00bf57e9f7ea974a89a1d7996ec1d84e478a1dfac19e1ca98f0d18096b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MessagesModule-0c14283287374efcd1843d13642ac464090ee5d471603cc1a17c8d51d8b7f0bd80247e00bf57e9f7ea974a89a1d7996ec1d84e478a1dfac19e1ca98f0d18096b"' :
                                            'id="xs-components-links-module-MessagesModule-0c14283287374efcd1843d13642ac464090ee5d471603cc1a17c8d51d8b7f0bd80247e00bf57e9f7ea974a89a1d7996ec1d84e478a1dfac19e1ca98f0d18096b"' }>
                                            <li class="link">
                                                <a href="components/ListMessagesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListMessagesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubmitMessageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubmitMessageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MessagesRoutingModule.html" data-type="entity-link" >MessagesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundModule.html" data-type="entity-link" >PageNotFoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageNotFoundModule-fccb7226b6bf0809a77e78e9eafbfa2af0b1cfe9ffd092dfdac3112eaa4288cef14ed2fbbcd5aa377007fd81f929987a61dee76de1481492219a56d0f3d4e6db"' : 'data-target="#xs-components-links-module-PageNotFoundModule-fccb7226b6bf0809a77e78e9eafbfa2af0b1cfe9ffd092dfdac3112eaa4288cef14ed2fbbcd5aa377007fd81f929987a61dee76de1481492219a56d0f3d4e6db"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageNotFoundModule-fccb7226b6bf0809a77e78e9eafbfa2af0b1cfe9ffd092dfdac3112eaa4288cef14ed2fbbcd5aa377007fd81f929987a61dee76de1481492219a56d0f3d4e6db"' :
                                            'id="xs-components-links-module-PageNotFoundModule-fccb7226b6bf0809a77e78e9eafbfa2af0b1cfe9ffd092dfdac3112eaa4288cef14ed2fbbcd5aa377007fd81f929987a61dee76de1481492219a56d0f3d4e6db"' }>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundRoutingModule.html" data-type="entity-link" >PageNotFoundRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-784d60872f62f5b332a96133f7adbe533363aca92d272a2e30b006e8c74f52839e08ba5256d6d6a7bda1e05a7e5f59496166f21dd4a1eccc3655f56d12259955"' : 'data-target="#xs-components-links-module-SharedModule-784d60872f62f5b332a96133f7adbe533363aca92d272a2e30b006e8c74f52839e08ba5256d6d6a7bda1e05a7e5f59496166f21dd4a1eccc3655f56d12259955"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-784d60872f62f5b332a96133f7adbe533363aca92d272a2e30b006e8c74f52839e08ba5256d6d6a7bda1e05a7e5f59496166f21dd4a1eccc3655f56d12259955"' :
                                            'id="xs-components-links-module-SharedModule-784d60872f62f5b332a96133f7adbe533363aca92d272a2e30b006e8c74f52839e08ba5256d6d6a7bda1e05a7e5f59496166f21dd4a1eccc3655f56d12259955"' }>
                                            <li class="link">
                                                <a href="components/BtnLinkComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BtnLinkComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TemplatesModule.html" data-type="entity-link" >TemplatesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TemplatesModule-a8c61f2d907e51d8535117bb2453f0e2ded0bea0ebc0929e9dfefccf95713814f6932acfb7e905c7b8fcf8abba578f50b9f4f71f4826bbd288f55e4794494442"' : 'data-target="#xs-components-links-module-TemplatesModule-a8c61f2d907e51d8535117bb2453f0e2ded0bea0ebc0929e9dfefccf95713814f6932acfb7e905c7b8fcf8abba578f50b9f4f71f4826bbd288f55e4794494442"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TemplatesModule-a8c61f2d907e51d8535117bb2453f0e2ded0bea0ebc0929e9dfefccf95713814f6932acfb7e905c7b8fcf8abba578f50b9f4f71f4826bbd288f55e4794494442"' :
                                            'id="xs-components-links-module-TemplatesModule-a8c61f2d907e51d8535117bb2453f0e2ded0bea0ebc0929e9dfefccf95713814f6932acfb7e905c7b8fcf8abba578f50b9f4f71f4826bbd288f55e4794494442"' }>
                                            <li class="link">
                                                <a href="components/TemplateContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link" >UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-4230194bcd969f334196dbb93a9c39c484a3baefc498ad634cad760fbfc6c3dc69e1b407fc0b5c28dbe61fbaf60d3a680bc50cd004cb2754b8da0d5d91c58333"' : 'data-target="#xs-components-links-module-UiModule-4230194bcd969f334196dbb93a9c39c484a3baefc498ad634cad760fbfc6c3dc69e1b407fc0b5c28dbe61fbaf60d3a680bc50cd004cb2754b8da0d5d91c58333"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-4230194bcd969f334196dbb93a9c39c484a3baefc498ad634cad760fbfc6c3dc69e1b407fc0b5c28dbe61fbaf60d3a680bc50cd004cb2754b8da0d5d91c58333"' :
                                            'id="xs-components-links-module-UiModule-4230194bcd969f334196dbb93a9c39c484a3baefc498ad634cad760fbfc6c3dc69e1b407fc0b5c28dbe61fbaf60d3a680bc50cd004cb2754b8da0d5d91c58333"' }>
                                            <li class="link">
                                                <a href="components/UiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Channel.html" data-type="entity-link" >Channel</a>
                            </li>
                            <li class="link">
                                <a href="classes/Message.html" data-type="entity-link" >Message</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ChannelsService.html" data-type="entity-link" >ChannelsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessagesService.html" data-type="entity-link" >MessagesService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ChannelI.html" data-type="entity-link" >ChannelI</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MessageI.html" data-type="entity-link" >MessageI</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});