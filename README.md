# GradientText Component

A beautiful and customizable gradient text component for React Native Expo applications. Create awesome text effects with smooth color gradients in any direction.

![Gradient Text Preview](https://img.shields.io/badge/React%20Native-Expo-blue?style=for-the-badge&logo=expo)

## ✨ Features

- 🎨 **Customizable Colors** - Use any gradient color combination
- 📐 **Direction Control** - Horizontal, vertical, or diagonal gradients  
- 🎯 **Easy Integration** - Drop-in replacement for React Native Text
- 🔧 **Flexible Styling** - Supports all Text component styles
- 📱 **Expo Compatible** - Works seamlessly with Expo managed workflow
- ⚡  **Performance Optimized** - Efficient rendering using MaskedView

## 📦 Installation

Install the package and required peer dependencies:

```bash
npm install expo-gradient-text
npx expo install expo-linear-gradient @react-native-masked-view/masked-view
```

## 🚀 Quick Start

```jsx
import React from 'react';
import { View } from 'react-native';
import GradientText from 'expo-gradient-text';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <GradientText style={{ fontSize: 32, fontWeight: 'bold' }}>
        Hello Gradient!
      </GradientText>
    </View>
  );
}
```

## 📖 API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `string \| React.ReactNode` | **Required** | The text content to display |
| `colors` | `string[]` | `['#FF6B6B', '#4ECDC4']` | Array of colors for the gradient |
| `start` | `{x: number, y: number}` | `{x: 0, y: 0}` | Starting point of the gradient |
| `end` | `{x: number, y: number}` | `{x: 1, y: 0}` | Ending point of the gradient |
| `style` | `TextStyle` | `{}` | Style object for the text |
| `...textProps` | `TextProps` | - | All other React Native Text props |

### Gradient Direction Guide

```jsx
// Horizontal (left to right)
start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}

// Vertical (top to bottom)  
start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}

// Diagonal (top-left to bottom-right)
start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}

// Diagonal (top-right to bottom-left)
start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
```

## 🎨 Usage Examples

### Basic Gradient

```jsx
<GradientText style={{ fontSize: 24, fontWeight: 'bold' }}>
  Welcome!
</GradientText>
```

### Custom Colors

```jsx
<GradientText 
  colors={['#667eea', '#764ba2']}
  style={{ fontSize: 28, fontWeight: '600' }}
>
  Custom Gradient
</GradientText>
```

### Vertical Gradient

```jsx
<GradientText 
  colors={['#ff9a9e', '#fecfef']}
  start={{ x: 0, y: 0 }}
  end={{ x: 0, y: 1 }}
  style={{ fontSize: 32, fontWeight: 'bold' }}
>
  Vertical Flow
</GradientText>
```

### Rainbow Effect

```jsx
<GradientText 
  colors={['#ff0000', '#ff8000', '#ffff00', '#80ff00', '#00ff80', '#0080ff', '#8000ff']}
  style={{ fontSize: 26, fontWeight: 'bold' }}
>
  Rainbow Magic
</GradientText>
```

### Sunset Theme

```jsx
<GradientText 
  colors={['#ff7e5f', '#feb47b']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
  style={{ fontSize: 30, fontWeight: 'bold' }}
>
  Sunset Vibes
</GradientText>
```

## 🎨 Popular Color Combinations

```jsx
// Ocean Breeze
colors={['#667eea', '#764ba2']}

// Warm Sunset  
colors={['#ff7e5f', '#feb47b']}

// Cool Blues
colors={['#74b9ff', '#0984e3']}

// Purple Dream
colors={['#a29bfe', '#6c5ce7']}

// Green Nature
colors={['#55efc4', '#00b894']}

// Fire Gradient
colors={['#fd79a8', '#fdcb6e', '#e17055']}

// Night Sky
colors={['#2d3436', '#636e72', '#b2bec3']}
```

## 🏗️ Component Structure

The component uses a combination of `MaskedView` and `LinearGradient` to achieve the gradient text effect:

1. **MaskedView** - Creates a mask using the text shape
2. **LinearGradient** - Provides the gradient background
3. **Text** - Invisible text that defines the mask boundaries

## 🔧 TypeScript Support

```typescript
interface GradientTextProps extends TextProps {
  children: React.ReactNode;
  colors?: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  style?: StyleProp<TextStyle>;
}
```

## 📱 Platform Compatibility

- ✅ iOS
- ✅ Android
- ✅ Expo Go
- ✅ Expo Dev Build

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Expo Linear Gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)
- Uses [React Native Masked View](https://github.com/react-native-masked-view/masked-view)
- Inspired by modern gradient design trends

---

**Made with ❤️ for the React Native community** 