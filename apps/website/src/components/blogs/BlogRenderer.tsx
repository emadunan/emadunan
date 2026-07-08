"use client";

import { MDXProvider } from '@mdx-js/react';
import { mdxComponents } from './mdxComponents';
import dynamic from 'next/dynamic';
import type { FC } from 'react';

interface Props {
  slug: string;
}

const mdxMap: Record<string, () => Promise<any>> = {
  'show-git-branch-in-shell': () => import('./content/show-git-branch-in-shell.mdx'),
  'setup-self-hosted-git-server-with-gitea': () => import('./content/setup-self-hosted-git-server-with-gitea.mdx'),
  'setup-shadowsocks-libev-ubuntu-proxy-server': () => import('./content/setup-shadowsocks-libev-ubuntu-proxy-server.mdx'),
  'setup-shadowsocks-client-android-linux-windows': () => import('./content/setup-shadowsocks-client-android-linux-windows.mdx'),
  'setup-ssh-key-authentication': () => import('./content/setup-ssh-key-authentication.mdx'),
  'wireguard-full-server-client-setup': () => import('./content/wireguard-full-server-client-setup.mdx'),
  'create-self-hosted-github-actions-runner': () => import('./content/create-self-hosted-github-actions-runner.mdx'),
};

const BlogRenderer: FC<Props> = ({ slug }) => {
  const importFn = mdxMap[slug];

  if (!importFn) {
    return <p>Post not found.</p>;
  }

  const BlogPost = dynamic(importFn, { ssr: false });

  return (
    <MDXProvider components={mdxComponents}>
      <BlogPost />
    </MDXProvider>
  );
};

export default BlogRenderer;
