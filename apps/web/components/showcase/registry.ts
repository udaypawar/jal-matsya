import type { ComponentType } from "react"

import AccordionDemo from "./demos/accordion"
import AlertDemo from "./demos/alert"
import AlertDialogDemo from "./demos/alert-dialog"
import AspectRatioDemo from "./demos/aspect-ratio"
import AttachmentDemo from "./demos/attachment"
import AvatarDemo from "./demos/avatar"
import BadgeDemo from "./demos/badge"
import BreadcrumbDemo from "./demos/breadcrumb"
import BubbleDemo from "./demos/bubble"
import ButtonDemo from "./demos/button"
import ButtonGroupDemo from "./demos/button-group"
import CalendarDemo from "./demos/calendar"
import CardDemo from "./demos/card"
import CarouselDemo from "./demos/carousel"
import ChartDemo from "./demos/chart"
import CheckboxDemo from "./demos/checkbox"
import CollapsibleDemo from "./demos/collapsible"
import ComboboxDemo from "./demos/combobox"
import CommandDemo from "./demos/command"
import ContextMenuDemo from "./demos/context-menu"
import DialogDemo from "./demos/dialog"
import DirectionDemo from "./demos/direction"
import DrawerDemo from "./demos/drawer"
import DropdownMenuDemo from "./demos/dropdown-menu"
import EmptyDemo from "./demos/empty"
import FieldDemo from "./demos/field"
import FormDemo from "./demos/form"
import HoverCardDemo from "./demos/hover-card"
import InputDemo from "./demos/input"
import InputGroupDemo from "./demos/input-group"
import InputOtpDemo from "./demos/input-otp"
import ItemDemo from "./demos/item"
import KbdDemo from "./demos/kbd"
import LabelDemo from "./demos/label"
import MarkerDemo from "./demos/marker"
import MenubarDemo from "./demos/menubar"
import MessageDemo from "./demos/message"
import MessageScrollerDemo from "./demos/message-scroller"
import NativeSelectDemo from "./demos/native-select"
import NavigationMenuDemo from "./demos/navigation-menu"
import PaginationDemo from "./demos/pagination"
import PopoverDemo from "./demos/popover"
import ProgressDemo from "./demos/progress"
import RadioGroupDemo from "./demos/radio-group"
import ResizableDemo from "./demos/resizable"
import ScrollAreaDemo from "./demos/scroll-area"
import SelectDemo from "./demos/select"
import SeparatorDemo from "./demos/separator"
import SheetDemo from "./demos/sheet"
import SidebarDemo from "./demos/sidebar"
import SkeletonDemo from "./demos/skeleton"
import SliderDemo from "./demos/slider"
import SonnerDemo from "./demos/sonner"
import SpinnerDemo from "./demos/spinner"
import SwitchDemo from "./demos/switch"
import TableDemo from "./demos/table"
import TabsDemo from "./demos/tabs"
import TextareaDemo from "./demos/textarea"
import ToggleDemo from "./demos/toggle"
import ToggleGroupDemo from "./demos/toggle-group"
import TooltipDemo from "./demos/tooltip"

export type ShowcaseEntry = {
  slug: string
  title: string
  category: string
  description: string
  Demo: ComponentType
  /** Demo needs the full width of the preview area. */
  wide?: boolean
}

export const showcase: ShowcaseEntry[] = [
  {
    slug: "button",
    title: "Button",
    category: "Actions",
    description: "Displays a button or a component that looks like a button.",
    Demo: ButtonDemo,
  },
  {
    slug: "button-group",
    title: "Button Group",
    category: "Actions",
    description: "Groups related buttons together with consistent styling.",
    Demo: ButtonGroupDemo,
  },
  {
    slug: "toggle",
    title: "Toggle",
    category: "Actions",
    description: "A two-state button that can be either on or off.",
    Demo: ToggleDemo,
  },
  {
    slug: "toggle-group",
    title: "Toggle Group",
    category: "Actions",
    description: "A set of two-state buttons that can be toggled on or off.",
    Demo: ToggleGroupDemo,
  },
  {
    slug: "kbd",
    title: "Kbd",
    category: "Actions",
    description: "Displays a keyboard key or shortcut.",
    Demo: KbdDemo,
  },
  {
    slug: "input",
    title: "Input",
    category: "Forms",
    description: "A text input field.",
    Demo: InputDemo,
  },
  {
    slug: "input-group",
    title: "Input Group",
    category: "Forms",
    description: "Inputs with addons, buttons and helper text.",
    Demo: InputGroupDemo,
    wide: true,
  },
  {
    slug: "input-otp",
    title: "Input OTP",
    category: "Forms",
    description: "Accessible one-time password input with copy-paste support.",
    Demo: InputOtpDemo,
  },
  {
    slug: "textarea",
    title: "Textarea",
    category: "Forms",
    description: "A multi-line text input.",
    Demo: TextareaDemo,
  },
  {
    slug: "label",
    title: "Label",
    category: "Forms",
    description: "Renders an accessible label associated with controls.",
    Demo: LabelDemo,
  },
  {
    slug: "checkbox",
    title: "Checkbox",
    category: "Forms",
    description: "A control that toggles between checked and unchecked.",
    Demo: CheckboxDemo,
  },
  {
    slug: "radio-group",
    title: "Radio Group",
    category: "Forms",
    description: "A set of checkable buttons where only one can be checked.",
    Demo: RadioGroupDemo,
  },
  {
    slug: "switch",
    title: "Switch",
    category: "Forms",
    description: "A control that toggles between on and off.",
    Demo: SwitchDemo,
  },
  {
    slug: "slider",
    title: "Slider",
    category: "Forms",
    description: "Select a value within a given range.",
    Demo: SliderDemo,
  },
  {
    slug: "select",
    title: "Select",
    category: "Forms",
    description: "A list of options for the user to pick from.",
    Demo: SelectDemo,
  },
  {
    slug: "native-select",
    title: "Native Select",
    category: "Forms",
    description: "A styled native HTML select element.",
    Demo: NativeSelectDemo,
  },
  {
    slug: "combobox",
    title: "Combobox",
    category: "Forms",
    description: "Autocomplete input with a list of suggestions.",
    Demo: ComboboxDemo,
  },
  {
    slug: "calendar",
    title: "Calendar",
    category: "Forms",
    description: "A date field that lets users enter and edit dates.",
    Demo: CalendarDemo,
  },
  {
    slug: "field",
    title: "Field",
    category: "Forms",
    description: "Compose accessible form fields with labels, descriptions and errors.",
    Demo: FieldDemo,
    wide: true,
  },
  {
    slug: "form",
    title: "Form",
    category: "Forms",
    description: "Forms built with React Hook Form and Zod validation.",
    Demo: FormDemo,
    wide: true,
  },
  {
    slug: "avatar",
    title: "Avatar",
    category: "Data display",
    description: "An image element with a fallback for representing the user.",
    Demo: AvatarDemo,
  },
  {
    slug: "badge",
    title: "Badge",
    category: "Data display",
    description: "Displays a badge or a component that looks like a badge.",
    Demo: BadgeDemo,
  },
  {
    slug: "card",
    title: "Card",
    category: "Data display",
    description: "Displays a card with header, content and footer.",
    Demo: CardDemo,
  },
  {
    slug: "table",
    title: "Table",
    category: "Data display",
    description: "A responsive table component.",
    Demo: TableDemo,
    wide: true,
  },
  {
    slug: "chart",
    title: "Chart",
    category: "Data display",
    description: "Beautiful charts built with Recharts.",
    Demo: ChartDemo,
    wide: true,
  },
  {
    slug: "item",
    title: "Item",
    category: "Data display",
    description: "A versatile flex container for displaying content.",
    Demo: ItemDemo,
    wide: true,
  },
  {
    slug: "empty",
    title: "Empty",
    category: "Data display",
    description: "An empty state for when there is no data.",
    Demo: EmptyDemo,
  },
  {
    slug: "carousel",
    title: "Carousel",
    category: "Data display",
    description: "A carousel with motion and swipe built using Embla.",
    Demo: CarouselDemo,
    wide: true,
  },
  {
    slug: "aspect-ratio",
    title: "Aspect Ratio",
    category: "Data display",
    description: "Displays content within a desired ratio.",
    Demo: AspectRatioDemo,
  },
  {
    slug: "skeleton",
    title: "Skeleton",
    category: "Data display",
    description: "A placeholder shown while content is loading.",
    Demo: SkeletonDemo,
  },
  {
    slug: "spinner",
    title: "Spinner",
    category: "Data display",
    description: "An indicator that shows a loading state.",
    Demo: SpinnerDemo,
  },
  {
    slug: "progress",
    title: "Progress",
    category: "Data display",
    description: "Displays an indicator showing completion progress.",
    Demo: ProgressDemo,
  },
  {
    slug: "alert",
    title: "Alert",
    category: "Feedback",
    description: "Displays a callout for user attention.",
    Demo: AlertDemo,
  },
  {
    slug: "sonner",
    title: "Sonner",
    category: "Feedback",
    description: "An opinionated toast component.",
    Demo: SonnerDemo,
  },
  {
    slug: "dialog",
    title: "Dialog",
    category: "Overlays",
    description: "A window overlaid on the primary window.",
    Demo: DialogDemo,
  },
  {
    slug: "alert-dialog",
    title: "Alert Dialog",
    category: "Overlays",
    description: "A modal dialog that interrupts the user and expects a response.",
    Demo: AlertDialogDemo,
  },
  {
    slug: "sheet",
    title: "Sheet",
    category: "Overlays",
    description: "Extends Dialog to show content that complements the screen.",
    Demo: SheetDemo,
  },
  {
    slug: "drawer",
    title: "Drawer",
    category: "Overlays",
    description: "A drawer component for React, built on Vaul.",
    Demo: DrawerDemo,
  },
  {
    slug: "popover",
    title: "Popover",
    category: "Overlays",
    description: "Displays rich content in a portal, triggered by a button.",
    Demo: PopoverDemo,
  },
  {
    slug: "hover-card",
    title: "Hover Card",
    category: "Overlays",
    description: "Preview content available behind a link on hover.",
    Demo: HoverCardDemo,
  },
  {
    slug: "tooltip",
    title: "Tooltip",
    category: "Overlays",
    description: "A popup that shows information on hover or focus.",
    Demo: TooltipDemo,
  },
  {
    slug: "dropdown-menu",
    title: "Dropdown Menu",
    category: "Overlays",
    description: "Displays a menu of actions triggered by a button.",
    Demo: DropdownMenuDemo,
  },
  {
    slug: "context-menu",
    title: "Context Menu",
    category: "Overlays",
    description: "A menu triggered by right-clicking an area.",
    Demo: ContextMenuDemo,
  },
  {
    slug: "command",
    title: "Command",
    category: "Overlays",
    description: "Fast, composable command menu.",
    Demo: CommandDemo,
    wide: true,
  },
  {
    slug: "breadcrumb",
    title: "Breadcrumb",
    category: "Navigation",
    description: "Displays the path to the current resource.",
    Demo: BreadcrumbDemo,
  },
  {
    slug: "navigation-menu",
    title: "Navigation Menu",
    category: "Navigation",
    description: "A collection of links for navigating websites.",
    Demo: NavigationMenuDemo,
    wide: true,
  },
  {
    slug: "menubar",
    title: "Menubar",
    category: "Navigation",
    description: "A persistent menu, common in desktop applications.",
    Demo: MenubarDemo,
    wide: true,
  },
  {
    slug: "pagination",
    title: "Pagination",
    category: "Navigation",
    description: "Pagination with page navigation and next/previous links.",
    Demo: PaginationDemo,
  },
  {
    slug: "tabs",
    title: "Tabs",
    category: "Navigation",
    description: "Layered sections of content shown one at a time.",
    Demo: TabsDemo,
  },
  {
    slug: "sidebar",
    title: "Sidebar",
    category: "Navigation",
    description: "A composable, themeable and customizable sidebar.",
    Demo: SidebarDemo,
    wide: true,
  },
  {
    slug: "accordion",
    title: "Accordion",
    category: "Layout",
    description: "Vertically stacked headings that reveal content.",
    Demo: AccordionDemo,
  },
  {
    slug: "collapsible",
    title: "Collapsible",
    category: "Layout",
    description: "An interactive component which expands and collapses a panel.",
    Demo: CollapsibleDemo,
  },
  {
    slug: "separator",
    title: "Separator",
    category: "Layout",
    description: "Visually or semantically separates content.",
    Demo: SeparatorDemo,
  },
  {
    slug: "scroll-area",
    title: "Scroll Area",
    category: "Layout",
    description: "Augments native scroll with custom, cross-browser styling.",
    Demo: ScrollAreaDemo,
  },
  {
    slug: "resizable",
    title: "Resizable",
    category: "Layout",
    description: "Accessible resizable panel groups and layouts.",
    Demo: ResizableDemo,
    wide: true,
  },
  {
    slug: "direction",
    title: "Direction",
    category: "Layout",
    description: "Provides LTR / RTL reading direction to components.",
    Demo: DirectionDemo,
  },
  {
    slug: "message",
    title: "Message",
    category: "Chat & AI",
    description: "Lays out a chat message with avatar, header and footer.",
    Demo: MessageDemo,
  },
  {
    slug: "bubble",
    title: "Bubble",
    category: "Chat & AI",
    description: "Chat bubbles with variants, alignment and reactions.",
    Demo: BubbleDemo,
  },
  {
    slug: "attachment",
    title: "Attachment",
    category: "Chat & AI",
    description: "Displays uploaded files with state (uploading, error, done).",
    Demo: AttachmentDemo,
    wide: true,
  },
  {
    slug: "marker",
    title: "Marker",
    category: "Chat & AI",
    description: "Inline status and timeline markers for conversations.",
    Demo: MarkerDemo,
  },
  {
    slug: "message-scroller",
    title: "Message Scroller",
    category: "Chat & AI",
    description: "Scroll container that keeps the latest message in view.",
    Demo: MessageScrollerDemo,
    wide: true,
  },
]

export const categories = [...new Set(showcase.map((entry) => entry.category))]
