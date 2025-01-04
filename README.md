# Markdown Previewer  

A dynamic Markdown Previewer built using **React** and **Tailwind CSS**, capable of rendering GitHub-flavored Markdown in real-time. This project fulfills all the user stories required for the assignment and showcases a clean, responsive interface.

---

## 🌟 Features  

- **Live Preview**: Type markdown in the editor, and see the rendered HTML instantly.  
- **GitHub-Flavored Markdown Support**: Supports headings, links, inline code, code blocks, lists, blockquotes, images, bold text, and more.  
- **Responsive Design**: Built with Tailwind CSS for a seamless experience across devices.  
- **Default Markdown**: Loads with pre-filled markdown to showcase supported features.  
- **Enhanced Code Blocks**: Code blocks are styled with custom padding, background, and font for better readability.  
- **Customized Blockquotes**: Blockquotes are styled with distinct borders, padding, and font adjustments to stand out.  
- **Table Support**: Tables are styled to display neatly with borders, spacing, and responsive adjustments for smaller screens.  
- **Bonus Feature**: Line breaks are rendered as `<br>` elements.  

These customizations improve the visual appeal and usability of the Markdown previewer, ensuring a polished and professional user experience.


---

## 🚀 Live Demo  

🔗 <a href="https://golam-rabby-markdown-previewer.netlify.app/" rel="noopener noreferrer" target="_blank">Markdown Previewer</a>


---

## 📸 Preview  

*![image](https://github.com/user-attachments/assets/3794a038-db27-4adc-8cf7-4c17f48cf60a)
*  

---

## 🛠️ Technologies Used  

- **React.js**: For building the interactive UI.  
- **Tailwind CSS**: For responsive and modern styling.  
- **Marked.js**: To parse and render markdown as HTML.  
- **JavaScript**: For core logic and functionality.  

---

## 🚨 Important Note for Tailwind Users  

When using **Tailwind CSS**, default styles for HTML elements are removed to maintain utility-first principles. To ensure proper rendering of Markdown styles, add the following CSS rule to your `index.css` file:  

```css
.markdown * {
  all: revert; /* Reset styles for Markdown rendering */
}
```

## ⚙️ Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/golam-rabby821/markdown-previewer.git  
   cd markdown-previewer  

