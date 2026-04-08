import { useEffect } from 'react';

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title + ' | 대출 이자 계산기';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      (meta as HTMLMetaElement).name = 'description';
      document.head.appendChild(meta);
    }
    (meta as HTMLMetaElement).content = description;
  }, [title, description]);
}
