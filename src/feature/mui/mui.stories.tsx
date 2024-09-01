import { Mui } from "./mui";
import { StoryObj ,Meta} from "@storybook/react"


type Story = StoryObj<typeof Mui>;

const meta :Meta<typeof Mui> = {
    title: "Mui",
    component: Mui,
    };

    export default meta;

    export const Default: Story = {}