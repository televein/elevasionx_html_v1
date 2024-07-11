module.exports = {
    theme: {
      extend: {  fontFamily: {
        custom: 'var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))'
      },
        keyframes: {
          scroll: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
          },
        },
        animation: {
          scroll: 'scroll 20s linear infinite',
        },
      },
    },
    plugins: [],
  };
  