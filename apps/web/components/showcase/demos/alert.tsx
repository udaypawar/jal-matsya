"use client"

import {
  AlertCircleIcon,
  CheckCircle2Icon,
  InfoIcon,
  PopcornIcon,
  TriangleAlertIcon,
} from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@jal-matsya/ui/components/alert"

export default function AlertDemo() {
  return (
    <div className="grid w-full max-w-xl items-start gap-4">
      <Alert variant="success">
        <CheckCircle2Icon />
        <AlertTitle>Success! Your changes have been saved</AlertTitle>
        <AlertDescription>This is an alert with icon, title and description.</AlertDescription>
      </Alert>
      <Alert>
        <PopcornIcon />
        <AlertTitle>This Alert has a title and an icon. No description.</AlertTitle>
      </Alert>
      <Alert variant="info">
        <InfoIcon />
        <AlertTitle>Your next delivery ships on Monday.</AlertTitle>
        <AlertDescription>You can change the date until Friday.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <TriangleAlertIcon />
        <AlertTitle>Your plan renews in 3 days.</AlertTitle>
        <AlertDescription>Update your card before then to avoid an interruption.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Unable to process your payment.</AlertTitle>
        <AlertDescription>
          <p>Please verify your billing information and try again.</p>
          <ul className="list-inside list-disc text-sm">
            <li>Check your card details</li>
            <li>Ensure sufficient funds</li>
            <li>Verify billing address</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  )
}
