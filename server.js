const express = require('express');
const app = express();
const port = 3000;

// サンプルデータ
const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];

// /items エンドポイントを定義
app.get('/items', (req, res) => {
  res.json(items);
});

// 静的ファイルを提供
app.use(express.static('dist'));

// サーバーの起動
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});