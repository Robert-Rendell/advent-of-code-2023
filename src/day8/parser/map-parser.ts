type Instructions = string;
type LeftRightInstruction = string;
type NodeName = string;
type NodeInstruction = [LeftRightInstruction, LeftRightInstruction];
type Nodes = Record<NodeName, NodeInstruction>;
export type CamelMap = [Instructions, Nodes];

export function mapParser(input: string): CamelMap {
    const lines = input.split("\n");
    const nodes = {};

    const instructions = lines[0]

    // AAA = (BBB, CCC)
    for (let i = 1; i < lines.length; i++) {
        const [nodeName, nodeInstructions] = lines[i].split(" = ")
        nodes[nodeName] = nodeInstructions.replace("(", "").replace(")", "").split(", ")
    }
    return [instructions, nodes]
}