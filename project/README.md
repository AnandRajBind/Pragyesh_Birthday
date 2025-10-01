# Birthday Celebration Website 🎉

A beautiful, interactive birthday celebration website for Pragyesh Kumar Seth!

## Features
- 🎂 3D Birthday Cake with animation
- 🎊 Confetti effects
- 📸 Photo slideshow
- 🎵 Music player
- ⏰ Countdown timer
- 💝 Personal birthday message
- 🎮 Memory game
- 📝 Digital guestbook
- 🌈 Multiple themes
- 📱 Responsive design

## Adding Birthday Person's Image

To add the birthday person's image to the website:

1. **Add the image file:**
   - Place the birthday person's image in the `public/images/` folder
   - Name it `pragyesh.jpg` (or update the src path in components if using a different name)
   - Supported formats: jpg, jpeg, png, webp

2. **Image recommendations:**
   - Use a square or portrait-oriented image for best results
   - Minimum resolution: 400x400 pixels
   - Maximum file size: 2MB for optimal loading
   - The image will be automatically cropped to a circle

3. **Components that display the image:**
   - **Hero section**: Large hero image at the top
   - **Personal Message**: Medium-sized image in the message section
   - **Photo Slideshow**: Can be added to the slideshow collection

4. **Fallback:**
   - If no image is provided, a nice placeholder with an icon will be shown
   - The placeholder maintains the same styling and animations

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Add the birthday person's image to `public/images/pragyesh.jpg`

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy your site

## Customization

- **Name**: Update the name in `Hero.tsx` and `PersonalMessage.tsx`
- **Date**: Update the birthday date in `Hero.tsx` and `CountdownTimer.tsx`
- **Messages**: Customize the personal message in `PersonalMessage.tsx`
- **Colors**: Modify the theme colors in `themes.ts`
- **Images**: Add more images to the slideshow in `PhotoSlideshow.tsx`

Happy Birthday! 🎂✨