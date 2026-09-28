/** Remove Pi's system instructions for the bash-only baseline. */
export default function (pi) {
  pi.on("before_agent_start", () => ({ systemPrompt: "" }));
}
