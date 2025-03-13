import dedent from 'dedent';
export default {
    PROMPT_OLD: dedent`
    你是一名精通 React 前端开发的专家。我将给你提供一个网站的描述，你需要使用 React、JavaScript 和 Tailwind CSS 编写对应的代码。请认真遵循下面的指示，这对我的工作非常重要。如果你做得好，我会给你100美元的小费：

    - 仔细逐步思考如何重现提示词中描述的界面（UI）。
    - 为用户要求创建的内容编写一个独立可运行的 React 组件，并使用默认导出（default export）。
    - 可以在文件中使用多个组件，但一定要有一个主组件调用其他所有组件。
    - 请务必详细说明 UI 中每个元素的位置，帮助开发者准确复现界面，以及元素之间如何对齐。
    - 密切关注背景颜色、文本颜色、字体大小、字体类型、内边距（padding）、外边距（margin）、边框（border）等属性，严格匹配颜色和尺寸。
    - 如果只是线框图（wireframe），请自行添加真实丰富的颜色，打造一个实际的彩色网页。
    - 确保提到屏幕截图中的每个部分，包括任何页眉（headers）、页脚（footers）、侧边栏（sidebars）等。
    - 严格使用截图中的文本内容。
    - 确保网站与提示词中描述的截图完全一致。
    - 严格注意背景颜色、文本颜色、字体大小、字体类型、内边距、外边距、边框等属性，确保颜色和尺寸的精确匹配。
    - 确保编写描述中的每一个部分，包括页眉、页脚等。
    - 对于 UI 元素，请使用描述中给出的原始文本。
    - 不要在代码中留下如“<!-- 根据需要添加其他导航链接 -->”或“<!-- 其他新闻项 -->”这样的注释，必须完整编写所有代码。
    - 根据需要重复元素以匹配描述。例如，如果有15个条目，代码必须包含全部15个条目，不允许留下类似“<!-- 为每条新闻重复此结构 -->”的注释，否则后果严重。
    - 不要在代码中出现任何中文和好吧，这是基于 React + tailwindcss 代码的示例任何其它内容
    - 所有图片请使用以下占位图片链接：https://redthread.uoregon.edu/files/original/affd16fd5264cab9197da4cd1a996f820e601ee4.png
    - 确保 React 应用具有交互性和功能性，需要时使用状态（state），不使用必需的 props。
    - 如果你使用了 React 的钩子（如 useState 或 useEffect），确保直接导入它们。
    - 使用 JavaScript (.js) 作为 React 组件的语言。
    - 使用 Tailwind CSS 的类来编写样式，不要使用任意数值（例如：\h-[600px]\），确保颜色方案的一致性。
    - 使用 margin 和 padding 使组件之间有良好的间距和布局。
    - 请仅返回完整的 React 代码（从 imports 开始），不要包含其他任何内容。对于我的工作来说，严格返回只包含 imports 的 React 代码非常重要。
    - 默认页面导出 export default App;
    - 返回的代码开头不要使用 \\\jsx 或 \\\typescript 或 \\\javascript 或 \\\tsx 等标记。`,
        PROMPT: dedent`:你是一名专业的 React 开发者及 UI/UX 设计师。
    - 根据提供的线框图（wireframe）图片，生成相似的网页。
    - 根据描述使用 React 和 Tailwind CSS 编写代码。
    - 确保添加线框图中提到的页眉（Header）和页脚（Footer），如果线框图未提供，则添加与描述相关的合理选项。
    - 图片占位请使用：https://www.svgrepo.com/show/508699/landscape-placeholder.svg
    - 添加所有细节，让 UI/UX 设计更加专业。
    - 确保整页颜色组合保持统一协调。
    - 添加一些颜色，使整体风格更加现代化。
    - 使用 lucide-react 图标库。
    - 不要使用任何第三方库。
    - 默认页面导出 export default App;
    - 只返回 React + Tailwind CSS 代码，除代码之外不包含任何其他文本内容和中文内容，开头更不要出现好吧等类似的中文，否则后果很严重。
`,

    AiModelList: [
        {
            name: 'Gemini Google',
            icon: '/google.png',
            // modelName: 'google/gemini-2.0-flash-001'
            modelName:"google/gemma-3-27b-it:free"
        },
        {
            name: 'llama By Meta',
            icon: '/meta.png',
            modelName: 'google/gemini-2.0-flash-001'
        },
        {
            name: 'Deepkseek',
            icon: '/deepseek.png',
            modelName: 'deepseek/deepseek-r1-zero'
        }
    ],
    DEPENDANCY: {

        "postcss": "^8",
        "tailwindcss": "^3.4.1",
        "autoprefixer": "^10.0.0",
        "uuid4": "^2.0.3",
        "tailwind-merge": "^2.4.0",
        "tailwindcss-animate": "^1.0.7",
        "lucide-react": "^0.469.0",
        "react-router-dom": "^7.1.1",
        "firebase": "^11.1.0",
        "@google/generative-ai": "^0.21.0",
        "date-fns": "^4.1.0",
        "react-chartjs-2": "^5.3.0",
        "chart.js": "^4.4.7",
    },
    FILES: {
        
        '/App.css': {
            code: `
            @tailwind base;
            @tailwind components;
            @tailwind utilities;`
        },
        '/tailwind.config.js': {
            code: `
            /** @type {import('tailwindcss').Config} */
            module.exports = {
            content: [
                "./src/**/*.{js,jsx,ts,tsx}",
            ],
            theme: {
                extend: {},
            },
            plugins: [],
            }`
        },
        '/postcss.config.js': {
            code: `/** @type {import('postcss-load-config').Config} */
                    const config = {
                    plugins: {
                        tailwindcss: {},
                    },`
        }
    }

}