export const shouldShowTopNavBrand = (language) => language !== 'zh';
export const shouldUseEditorialAbout = (language) => language !== 'zh';

export const getHeroDisplayName = (language, name) => {
  if (language !== 'zh') {
    return name;
  }

  return name.replace(/\s*Albert Chen\s*/i, '').trim();
};
