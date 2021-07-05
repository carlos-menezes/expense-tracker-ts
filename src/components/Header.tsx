import React from "react";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => <h2>{title}</h2>;
