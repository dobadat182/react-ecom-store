import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '@/components/ui/resizable';

const index = () => {
    return (
        <div className="flex flex-col p-6 border shadow-md gap-7 rounded-2xl">
            <div className="w-full">
                <Label className="block mb-2" htmlFor="search">
                    Search
                </Label>
                <Input type="text" id="search" placeholder="Search...   " />
            </div>

            <div className="w-full">
                <div className="flex flex-col">
                    <Label className="block mb-2" htmlFor="status">
                        Status
                    </Label>

                    <div
                        id="status"
                        className="flex gap-8 px-3 py-4 border rounded-lg shadow-sm"
                    >
                        <div className="flex items-center space-x-2">
                            <Checkbox id="all" />
                            <label
                                htmlFor="all"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                All
                            </label>
                        </div>

                        <div className="flex items-center space-x-2 ">
                            <Checkbox id="completed" />
                            <label
                                htmlFor="completed"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Completed
                            </label>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Checkbox id="todo" />
                            <label
                                htmlFor="todo"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                To do
                            </label>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Checkbox id="pending" />
                            <label
                                htmlFor="pending"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Pending
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <Label className="block mb-2" htmlFor="priority">
                    Priority
                </Label>

                <Select id="priority">
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a Priority" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Priority</SelectLabel>
                            <SelectItem value="all">
                                <Badge
                                    variant="outline"
                                    className="text-gray-500 border-gray-500"
                                >
                                    All
                                </Badge>
                            </SelectItem>
                            <SelectItem value="high">
                                <Badge
                                    variant="outline"
                                    className="text-red-500 border-red-500"
                                >
                                    High
                                </Badge>
                            </SelectItem>
                            <SelectItem value="medium">
                                <Badge
                                    variant="outline"
                                    className="text-yellow-500 border-yellow-500"
                                >
                                    Medium
                                </Badge>
                            </SelectItem>
                            <SelectItem value="low">
                                <Badge
                                    variant="outline"
                                    className="text-green-500 border-green-500"
                                >
                                    Low
                                </Badge>
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className="border divider"></div>

            <div className="w-full p-4 border rounded-lg">
                <div className="flex items-center justify-between ">
                    <div className="flex items-center gap-x-4">
                        <Checkbox />
                        <span className="text-base">Todo name...</span>
                    </div>

                    <Badge variant="secondary" className="">
                        Low
                    </Badge>
                </div>
            </div>

            {/* Add New Task */}
            <div className="w-full mt-16">
                <form action="">
                    <div className="flex flex-row gap-x-3">
                        <div className="basis-3/4">
                            <Label>Task Name</Label>
                            <Input
                                type="text"
                                placeholder="Enter your task..."
                            />
                            <div className="grid w-full gap-1.5 mt-5">
                                <Label>Task Description</Label>
                                <Textarea
                                    placeholder="Type your message here."
                                    id="message"
                                />
                            </div>
                        </div>
                        <div className="basis-1/4">
                            <div className="flex items-center mt-6 gap-x-3">
                                <Select>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Priority" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Low">Low</SelectItem>
                                        <SelectItem value="Medium">
                                            Medium
                                        </SelectItem>
                                        <SelectItem value="High">
                                            High
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <Button type="submit">Add</Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default index;
