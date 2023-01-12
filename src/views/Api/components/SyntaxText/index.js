

const SyntaxText = ({children, fontSize = 14}) => {
    return (
        <span style={{color: "#4F566B", border: "1px solid #E3E8EE", padding: "2px 4px 2px 4px", borderRadius: 4, fontSize: fontSize, fontFamily: "JetBrainsMono-Medium", backgroundColor: "#F7FAFC"}}> {children}</span>
    )
}

export default SyntaxText;
