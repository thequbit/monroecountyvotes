import path from 'path';

export default {
  copyAssets: [
    'src/index.html',
    {
      asset: 'src/assets/**',
      dist: 'dist/assets/'
    }
  ],
  jsAssets: ['src/js/**/*.js'],
  mainJs: 'src/index.js',
  mainScss: 'src/index.scss',
  devServerPort: 9000,
  eslintOverride: path.resolve(__dirname, 'customEslintrc')
};
