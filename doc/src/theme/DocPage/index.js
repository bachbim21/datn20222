/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import renderRoutes from '@docusaurus/renderRoutes';
import Layout from '@theme/Layout';
import DocSidebar from '@theme/DocSidebar';
import MDXComponents from '@theme/MDXComponents';
import NotFound from '@theme/NotFound';
import IconArrow from '@theme/IconArrow';
import { matchPath } from '@docusaurus/router';
import { translate } from '@docusaurus/Translate';
import clsx from 'clsx';
import { ThemeClassNames, docVersionSearchTag } from '@docusaurus/theme-common';
import bannerSME from '@site/static/img/bannerDAC.png';

import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';

import styles from './styles.module.css';

function getSidebar({ versionMetadata, currentDocRoute }) {
	function addTrailingSlash(str) {
		return str.endsWith('/') ? str : `${str}/`;
	}

	function removeTrailingSlash(str) {
		return str.endsWith('/') ? str.slice(0, -1) : str;
	}

	const { permalinkToSidebar, docsSidebars } = versionMetadata; // With/without trailingSlash, we should always be able to get the appropriate sidebar
	// note: docs plugin permalinks currently never have trailing slashes
	// trailingSlash is handled globally at the framework level, not plugin level

	const sidebarName =
		permalinkToSidebar[currentDocRoute.path] ||
		permalinkToSidebar[addTrailingSlash(currentDocRoute.path)] ||
		permalinkToSidebar[removeTrailingSlash(currentDocRoute.path)];
	const sidebar = docsSidebars[sidebarName];
	return {
		sidebar,
		sidebarName,
	};
}

function DocPageContent({ currentDocRoute, versionMetadata, children }) {
	const { pathname, search } = useLocation();
	const { siteConfig, isClient } = useDocusaurusContext();

	const history = useHistory();
	const token = useMemo(() => {
		if (search.startsWith('?token=')) {
			return search.replace('?token=', '');
		}
		return '';
	}, [search]);
	const [user, setUser] = useState({ initital: true });
	useEffect(() => {
		const getUser = async (myToken) => {
			try {
				const { data: userRes } = await axios.request({
					url: `${siteConfig.customFields.linkWebOrigin}/auth-server/api/users/profile`,
					method: 'get',
					headers: {
						Authorization: `Bearer ${myToken}`,
					},
				});
				localStorage.setItem('token', myToken);
				console.log(userRes);
				const portalUser = (userRes?.roles || []).reduce((res, p) => {
					res.push(...p.portal.map((el) => el.name.toLowerCase()));
					return res;
				}, []);
				userRes.portalUser = portalUser;
				setUser(userRes);
				history.push(pathname);
				return userRes;
			} catch (e) {
				localStorage.setItem('token', '');
				console.log(e);
				setUser(null);
				return null;
			}
		};
		const myToken = token || localStorage.getItem('token');
		if (myToken) {
			getUser(myToken);
		}
	}, [token]);

	const { pluginId, version } = versionMetadata;
	const { sidebarName, sidebar } = getSidebar({
		versionMetadata,
		currentDocRoute,
	});
	const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
	const [hiddenSidebar, setHiddenSidebar] = useState(false);
	const toggleSidebar = useCallback(() => {
		if (hiddenSidebar) {
			setHiddenSidebar(false);
		}

		setHiddenSidebarContainer(!hiddenSidebarContainer);
	}, [hiddenSidebar]);
	const { text, banner, portal } = useMemo(() => {
		const portalPath = pathname.split('/')[2] || 'dac';
		return {
			dac: {
				text: 'DAC',
				banner: bannerSME,
				portal: portalPath,
			},
		}[portalPath];
	}, [pathname]);

	const { portalUser } = user;
	if (portal === 'dev' || portal === 'admin') {
		if (user.initital && token) {
			return <div>...Loading</div>;
		}
		if (!portalUser || !portalUser.includes(portal)) {
			return (
				<div
					style={{
						textAlign: 'center',
					}}
				>
					Vui lòng{' '}
					<a
						href={`${siteConfig.customFields.linkWebOrigin}/${portal}-portal/login?callbackDocs=${pathname}`}
					>
						đăng nhập
					</a>{' '}
					để tiếp tục sử dụng
				</div>
			);
		}
	}
	return (
		<Layout
			key={isClient}
			wrapperClassName={ThemeClassNames.wrapper.docPages}
			pageClassName={ThemeClassNames.page.docPage}
			searchMetadatas={{
				version,
				tag: docVersionSearchTag(pluginId, version),
			}}
		>
			<div className={styles.docPage}>
				{sidebar && (
					<aside
						className={clsx(styles.docSidebarContainer, {
							[styles.docSidebarContainerHidden]: hiddenSidebarContainer,
						})}
						onTransitionEnd={(e) => {
							if (!e.currentTarget.classList.contains(styles.docSidebarContainer)) {
								return;
							}

							if (hiddenSidebarContainer) {
								setHiddenSidebar(true);
							}
						}}
					>
						<DocSidebar
							key={
								// Reset sidebar state on sidebar changes
								// See https://github.com/facebook/docusaurus/issues/3414
								sidebarName
							}
							sidebar={sidebar}
							path={currentDocRoute.path}
							sidebarCollapsible={siteConfig.themeConfig?.sidebarCollapsible ?? true}
							onCollapse={toggleSidebar}
							isHidden={hiddenSidebar}
						/>

						{hiddenSidebar && (
							<div
								className={styles.collapsedDocSidebar}
								title={translate({
									id: 'theme.docs.sidebar.expandButtonTitle',
									message: 'Expand sidebar',
									description: 'The ARIA label and title attribute for expand button of doc sidebar',
								})}
								aria-label={translate({
									id: 'theme.docs.sidebar.expandButtonAriaLabel',
									message: 'Expand sidebar',
									description: 'The ARIA label and title attribute for expand button of doc sidebar',
								})}
								tabIndex={0}
								role="button"
								onKeyDown={toggleSidebar}
								onClick={toggleSidebar}
							>
								<IconArrow className={styles.expandSidebarButtonIcon} />
							</div>
						)}
					</aside>
				)}
				<main
					className={clsx(styles.docMainContainer, {
						[styles.docMainContainerEnhanced]: hiddenSidebarContainer || !sidebar,
					})}
				>
					<div className={styles.docMainBanner}>
						<div className={styles.docMainBanner_title}>
							<span>Hướng dẫn sử dụng</span>
							<br />
							<span>hệ thống</span>
							<span style={{ color: '#2C3D94' }}> {text}</span>
						</div>
						<img src={banner} title="main sme" />
						<div className={styles.docMainBanner_bg} />
					</div>
					<div
						className={clsx('container padding-top--md padding-bottom--lg', styles.docItemWrapper, {
							[styles.docItemWrapperEnhanced]: hiddenSidebarContainer,
						})}
					>
						<MDXProvider components={MDXComponents}>{children}</MDXProvider>
					</div>
				</main>
			</div>
		</Layout>
	);
}

function DocPage(props) {
	const {
		route: { routes: docRoutes },
		versionMetadata,
		location,
	} = props;
	const currentDocRoute = docRoutes.find((docRoute) => matchPath(location.pathname, docRoute));

	if (!currentDocRoute) {
		return <NotFound {...props} />;
	}

	return (
		<DocPageContent currentDocRoute={currentDocRoute} versionMetadata={versionMetadata}>
			{renderRoutes(docRoutes, {
				versionMetadata,
			})}
		</DocPageContent>
	);
}

export default DocPage;
