
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'dancing-script': ['"Dancing Script"', 'cursive'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				holo: {
					blue: '#c5f9ff',
					pink: '#ff359b',
					purple: '#d400d4'
				},
				cyber: {
					dark: '#0a0a1a',
					darker: '#060614',
					blue: '#0099ff',
					light: '#00ccff'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				peak: {
					green: '#8fa56d',
					grass: '#5a7241',
					stone: '#8A898C',
					gravel: '#C8C8C9',
					rock: '#403E43',
					soil: '#3c3c2c'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				twinkle: {
					'0%': { opacity: '0.2' },
					'50%': { opacity: '0.4' },
					'100%': { opacity: '0.2' }
				},
				'gradient-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				shine: {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '100% 50%' }
				},
				'holographic-sweep': {
					'0%': { transform: 'translateX(-100%) translateY(-100%) rotate(45deg)' },
					'100%': { transform: 'translateX(100%) translateY(100%) rotate(45deg)' }
				},
				pulse: {
					'0%': { opacity: '0.3' },
					'100%': { opacity: '0.5' }
				},
				'rotate': {
					'0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
					'100%': { transform: 'translate(-50%, -50%) rotate(360deg)' }
				},
				float: {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(-10px)' }
				},
				'btn-holographic': {
					'0%': { transform: 'translateX(-100%) translateY(-100%) rotate(45deg)' },
					'100%': { transform: 'translateX(100%) translateY(100%) rotate(45deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				twinkle: 'twinkle 5s infinite alternate ease-in-out',
				'gradient-shift': 'gradient-shift 8s ease infinite',
				shine: 'shine 3s linear infinite',
				'holographic-sweep': 'holographic-sweep 3s linear infinite',
				pulse: 'pulse 2s infinite alternate',
				'rotate-slow': 'rotate 30s linear infinite',
				'rotate-medium': 'rotate 20s linear infinite reverse',
				'rotate-fast': 'rotate 10s linear infinite',
				float: 'float 3s ease-in-out infinite alternate',
				'float-delay': 'float 3s ease-in-out infinite alternate 1s',
				'btn-holographic': 'btn-holographic 3s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
